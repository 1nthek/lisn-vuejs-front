import Vue from 'vue'
import Vuex from 'vuex'
// import { noteList } from '../api/api.js'
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
    isPlay: false,

    noteList: [],
    noteTitle: "",
    content: "",
    
    user_id: -1,
    note_id: -1,
    sttText: [{
      id: null,
      content: "none",
      begin: "",
      end: "",
      audioId: "",
    }],
    domain: 'https://li-sn.io/v1/api'
  },
  mutations: {
    playSound(state) {
      state.isPlay = true;
      state.audio.currentTime = state.timeOffset;
      state.audio.play();
      state.timerId = setInterval(() => {
        var curTime = state.audio.currentTime;

        state.hour = Math.floor(curTime / 3600);
        state.hour = (state.hour >= 10) ? state.hour : "0" + state.hour;
        state.minute = Math.floor((curTime / 60) % 60);
        state.minute = (state.minute >= 10) ? state.minute : "0" + state.minute;
        state.second = Math.floor(curTime % 60);
        state.second = (state.second >= 10) ? state.second : "0" + state.second;
      }, 1000)
    },
    saveNote(state, { note_id, title, content }){
      var formData = new FormData();
      formData.append('note_id', note_id);
      formData.append('title', title);
      formData.append('content', content);
      axios.put(state.domain + '/record/note', formData)
        .then((res) => {
          // console.log('title and content are saved!');
        })
        .catch((ex) => {
          // console.log('저장 실패');
        })
    },
    setCookie(state, { name, value, exp }) {
      var date = new Date();
      date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
      document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    },
    setUserId(state, name) {
      var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      state.user_id = value ? value[2] : null;
    },
    setNoteId(state, name) {
      var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      state.note_id = value ? value[2] : null;
    },
    getNoteList(state) {
      setTimeout(() => {
        axios.get(state.domain + '/record/list?user_id=' + state.user_id)
          .then(res => {
            res.data.notes.forEach(element => {
              if(element.title==""){
                element.title = "untitled";
              }
              var date1 = new Date(Date.parse(element.created_at));
              var date2 = new Date(Date.parse(element.updated_at));
              element.created_at = date1.getFullYear() + '/' + (parseInt(date1.getMonth()) + 1) + '/' + date1.getDate() + ' ' + date1.getHours() + ':' + (date1.getMinutes() < 10 ? '0' : '') + date1.getMinutes()
              element.updated_at = date2.getFullYear() + '/' + (parseInt(date2.getMonth()) + 1) + '/' + date2.getDate() + ' ' + date2.getHours() + ':' + (date2.getMinutes() < 10 ? '0' : '') + date2.getMinutes()
            });
            state.noteList = res.data.notes;
          })
          .catch(({ response }) => {
            throw Error(response)
          })
        }, 300);  //delay loading
    },
    setCurrentTime(state, item) {
      var stamp = parseFloat(item.begin) / 1000;
      
      state.timeOffset = stamp;
      state.audio.currentTime = stamp;
      
      var curTime = stamp;
      state.hour = Math.floor(curTime / 3600);
      state.hour = (state.hour >= 10) ? state.hour : "0" + state.hour;
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