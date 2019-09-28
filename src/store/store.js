import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const UNAUTHORIZED = 401

Vue.use(Vuex);

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
    
    user_id: -1,
    note_id: -1,
    directory_id: -1,
    directory_name: "모든 노트",
    sttText: [{
      id: null,
      content: "none",
      begin: "",
      end: "",
      audioId: "",
    }],
    //staging server
    // domain: 'http://54.180.117.235/v1/api'
    //dev server
    domain: 'http://54.180.86.133/api'
    //real server
    // domain: 'https://li-sn.io/v1/api'
  },
  mutations: {
    initData(state){
      if (state.timerId != null){
        clearInterval(state.timerId);
      }
      state.audio.pause();
      state.hour = '0';
      state.minute = '00';
      state.second = '00';

      // state.timerId = null;
      state.audio = new Audio();
      state.timeOffset = 0.000;
      state.isPlaying = false;

      state.noteTitle = "";
      state.content = "";
      state.isRecordable = true;

      state.note_id = -1;
      state.sttText = [{
        id: null,
        content: "none",
        begin: "",
        end: "",
        audioId: "",
      }];
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
    // setCookie(state, { name, value, exp }) {
    //   var date = new Date();
    //   date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    //   document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    // },
    setUserId(state) {
      // var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      state.user_id = localStorage.getItem('glisn_user_id');
    },
    setNoteId(state) {
      // var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      state.note_id = localStorage.getItem('glisn_note_id');
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
    getDirectoryList(state){
      axios.get(state.domain + '/list/directory?user_id=' + state.user_id)
        .then(res => {
          state.directories = res.data.directories;
        })
        .catch((ex) => {
        })
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
  }
})