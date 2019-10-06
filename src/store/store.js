import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { setTokenInHeader } from '../api/api'
import * as api from '../api/api'
import fecha from 'fecha'
import router from '../router'


Vue.use(Vuex);

fecha.i18n = {
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNames: ['Sunday', 'Monday', '화요일', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  amPm: ['오전', '오후'],
  // D is the day of the month, function returns something like...  3rd or 11th
  DoFn: function (D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10]
  }
}

export const store = new Vuex.Store({
  state: {
    hour: '0',
    minute: '00',
    second: '00',

    timerId: null,
    audio: new Audio(),
    timeOffset: 0.000,
    isPlaying: false,

    noteList: [],
    noteTitle: "",
    note_started_at: "",
    note_ended_at: "",
    content: "",
    isRecordable: true,
    error: false,
    directories: [],
    
    token: null,
    user_id: null,
    note_id: null,
    directory_id: null,
    directory_name: "모든 노트",
    sttText:[],

    //staging server
    // domain: 'http://54.180.117.235/api'
    //dev server
    domain: 'http://54.180.86.133/api'
    //real server
    // domain: 'https://li-sn.io/v1/api'

    // baseDomain: 'http://54.180.86.133/',
    // baseURL=`${baseDomain}/api`,
  },
  getters:{
    isAuth(state){
      return state.token && state.user_id;
    }
  },
  mutations: {
    set_note_started_at(state, val){
      state.note_started_at = val;
    },
    set_note_ended_at(state, val) {
      state.note_ended_at = val;
    },
    onRefresh(state, { token, user_id }){
      let self = this;
      if (!token || !user_id) {
        gapi.load('auth2', function () {
          gapi.auth2.init().then(function () {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut();
            auth2.disconnect();
            delete localStorage.token;
            delete localStorage.user_id;
            return;
          })
        })
      }
      else{
        state.token = token;
        state.user_id = user_id;
        api.setTokenInHeader(token);
      }
    },
    logout(state){
      state.token = null;
      state.user_id = null;
      delete localStorage.token;
      delete localStorage.user_id;
      api.setTokenInHeader(null);
    },
    initData(state){
      if (state.timerId != null){
        clearInterval(state.timerId);
      }
      state.audio.pause();
      state.hour = '0';
      state.minute = '00';
      state.second = '00';
      
      state.audio = new Audio();
      state.timeOffset = 0.000;
      state.isPlaying = false;

      state.noteTitle = "";
      state.content = "";
      state.isRecordable = true;
      
      state.sttText = [];
    },
    setNoteData(state, value){
      let self = this;
      state.noteTitle = value.title;
      state.content = value.content;
      state.note_started_at = fecha.format(new Date(value.started_at), 'YYYY.MM.DD ddd A hh:mm')
      state.note_ended_at = fecha.format(new Date(value.ended_at), 'YYYY.MM.DD ddd A hh:mm')
      value.audios.forEach(element => {
        state.isRecordable = false;
        var audio_id = element.audio_id;
        var sentences = element.sentences;
        sentences.forEach(ele => {
          state.sttText.push({ content: ele.content, begin: ele.started_at, audioId: audio_id });
        })
        axios.get(state.domain + "/note/audio?audio_id=" + audio_id)
          .then((res) => {
            state.audio.src = res.data.audio_url;
          })
          .catch((ex) => {
          })
      });
    },
    clearInter(state){
      clearInterval(state.timerId);
    },
    playSound(state) {
      state.isPlaying = true;
      state.audio.currentTime = state.timeOffset;
      state.audio.play();
      
      state.timerId = setInterval(() => {
        var curTime = state.audio.currentTime;
        state.hour = Math.floor(curTime / 3600);
        state.hour = (state.hour >= 10) ? state.hour :  state.hour;
        state.minute = Math.floor((curTime / 60) % 60);
        state.minute = (state.minute >= 10) ? state.minute : "0" + state.minute;
        state.second = Math.floor(curTime % 60);
        state.second = (state.second >= 10) ? state.second : "0" + state.second;
      }, 1000)
    },
    setAccessToken(state) {
      state.token = localStorage.getItem('token');
    },
    setUserId(state) {
      state.user_id = localStorage.getItem('user_id');
    },
    setNoteId(state, note_id) {
      state.note_id = note_id;
    },
    setDirectoryName(state, directory_name){
      state.directory_name = directory_name;
    },
    getNoteList(state) {
      let self = this;
      state.error = false;

      state.directory_id = -1;
      setTimeout(() => {
        axios.get(state.domain + '/list/note/all?user_id=' + state.user_id)
          .then(res => {
            res.data.notes.forEach(element => {
              if (element.title == "") {
                element.title = "untitled";
              }
              var date1 = new Date(Date.parse(element.created_at));
              var date2 = new Date(Date.parse(element.updated_at));
              element.created_at = date1.getFullYear() + '/' + (parseInt(date1.getMonth()) + 1) + '/' + date1.getDate() + ' ' + date1.getHours() + ':' + (date1.getMinutes() < 10 ? '0' : '') + date1.getMinutes()
              element.updated_at = date2.getFullYear() + '/' + (parseInt(date2.getMonth()) + 1) + '/' + date2.getDate() + ' ' + date2.getHours() + ':' + (date2.getMinutes() < 10 ? '0' : '') + date2.getMinutes()
            });
            state.noteList = res.data.notes;
          })
          .catch((ex) => {
            axios.delete(state.domain + '/signin/token')
              .then((res) => {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut();
                auth2.disconnect();
                state.error = true;
              })
              .catch((ex) => {
              })
          })
      }, 300);  //delay loading
    },
    getSharedNoteList(state) {
      let self = this;
      state.error = false;

      state.directory_id = -1;
      setTimeout(() => {
        axios.get(state.domain + '/list/note/shared?user_id=' + state.user_id)
          .then(res => {
            res.data.notes.forEach(element => {
              if (element.title == "") {
                element.title = "untitled";
              }
              var date1 = new Date(Date.parse(element.created_at));
              var date2 = new Date(Date.parse(element.updated_at));
              element.created_at = date1.getFullYear() + '/' + (parseInt(date1.getMonth()) + 1) + '/' + date1.getDate() + ' ' + date1.getHours() + ':' + (date1.getMinutes() < 10 ? '0' : '') + date1.getMinutes()
              element.updated_at = date2.getFullYear() + '/' + (parseInt(date2.getMonth()) + 1) + '/' + date2.getDate() + ' ' + date2.getHours() + ':' + (date2.getMinutes() < 10 ? '0' : '') + date2.getMinutes()
            });
            state.noteList = res.data.notes;
          })
          .catch((ex) => {
            axios.delete(state.domain + '/signin/token')
              .then((res) => {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut();
                auth2.disconnect();
                state.error = true;
              })
              .catch((ex) => {
              })
          })
      }, 300);  //delay loading
    },
    getDirectoryNoteList(state, directory_id, directory_name) {
      let self = this;
      state.error = false;
      state.directory_id = directory_id;
      setTimeout(() => {
        axios.get(state.domain + '/list/note?directory_id=' + directory_id)
          .then(res => {
            res.data.notes.forEach(element => {
              if (element.title == "") {
                element.title = "untitled";
              }
              var date1 = new Date(Date.parse(element.created_at));
              var date2 = new Date(Date.parse(element.updated_at));
              element.created_at = date1.getFullYear() + '/' + (parseInt(date1.getMonth()) + 1) + '/' + date1.getDate() + ' ' + date1.getHours() + ':' + (date1.getMinutes() < 10 ? '0' : '') + date1.getMinutes()
              element.updated_at = date2.getFullYear() + '/' + (parseInt(date2.getMonth()) + 1) + '/' + date2.getDate() + ' ' + date2.getHours() + ':' + (date2.getMinutes() < 10 ? '0' : '') + date2.getMinutes()
            });
            state.noteList = res.data.notes;
          })
          .catch(err => {
            axios.delete(state.domain + '/signin/token')
              .then(res => {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut();
                auth2.disconnect();
                state.error = true;
              })
              .catch(err => {
              })
          })
      }, 300);  //delay loading
    },
    startCountingTimer(state){
      state.timeOffset = 0;
      state.timerId = setInterval(() => {
        state.timeOffset = state.timeOffset + 1;
        var curTime = state.timeOffset;
        state.hour = Math.floor(curTime / 3600);
        state.hour = (state.hour >= 10) ? state.hour :  state.hour;
        state.minute = Math.floor((curTime / 60) % 60);
        state.minute = (state.minute >= 10) ? state.minute : "0" + state.minute;
        state.second = Math.floor(curTime % 60);
        state.second = (state.second >= 10) ? state.second : "0" + state.second;
      }, 1000)
    },
    setCurrentTime(state, item) {
      var stamp = parseFloat(item.begin) / 1000;
      
      state.timeOffset = stamp;
      state.audio.currentTime = stamp;
      
      var curTime = stamp;
      state.hour = Math.floor(curTime / 3600);
      state.hour = (state.hour >= 10) ? state.hour :  state.hour;
      state.minute = Math.floor((curTime / 60) % 60);
      state.minute = (state.minute >= 10) ? state.minute : "0" + state.minute;
      state.second = Math.floor(curTime % 60);
      state.second = (state.second >= 10) ? state.second : "0" + state.second;
    },
    getCurrentWord(state) {      
      var word = null;
      for (var i = 0, len = state.sttText.length; i < len; i += 1) {
        var is_current_word = (
          (
            state.audio.currentTime >= (parseFloat(state.sttText[i].begin) / 1000)
            &&
            state.audio.currentTime < (parseFloat(state.sttText[i].end) / 1000)
          )
          // ||
          // (state.audio.currentTime < parseFloat(state.sttText[i].begin) / 1000)
        );
        
        if (is_current_word) {
          word = state.sttText[i];
          break;
        }
      }

      if (!word) {
        throw Error('Unable to find current word and we should always be able to.');
      }
      return word;
    },
    SET_LISTS(state, notes){
      notes.forEach(element => {
        if (element.title == "") {
          element.title = "untitled";
        }
        var date1 = new Date(Date.parse(element.created_at));
        var date2 = new Date(Date.parse(element.updated_at));
        element.created_at = date1.getFullYear() + '/' + (parseInt(date1.getMonth()) + 1) + '/' + date1.getDate() + ' ' + date1.getHours() + ':' + (date1.getMinutes() < 10 ? '0' : '') + date1.getMinutes()
        element.updated_at = date2.getFullYear() + '/' + (parseInt(date2.getMonth()) + 1) + '/' + date2.getDate() + ' ' + date2.getHours() + ':' + (date2.getMinutes() < 10 ? '0' : '') + date2.getMinutes()
      });
      state.noteList = notes;
    },
    SET_DIRECTORIES(state, directories){
      state.directories = directories;
    }
  },
  actions:{
    FETCH_LISTS({ commit, state }) {
      return api.list.fetch(state.user_id).then(data => {
        commit('SET_LISTS', data.notes)        
      })
    },
    FETCH_DIRECTORIES({commit, state}){
      return api.directory.fetch(state.user_id).then(data => {
        commit('SET_DIRECTORIES', data.directories)
      })
    },
    CREATE_NOTE({state}){
      var formData = new FormData();
      formData.append('user_id', state.user_id);
      return api.note.create(formData).then(data => {
        router.push('/noteEdit/' + data.note_id);
      })
    },
    FETCH_NOTE({commit, state}){
      return api.note.fetch(state.note_id).then(data => {
        commit('setNoteData', data);
      })

    }
  }
})

const { token, user_id } = localStorage
store.commit('onRefresh', { token, user_id })