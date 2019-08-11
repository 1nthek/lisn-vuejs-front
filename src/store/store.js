import Vue from 'vue'
import Vuex from 'vuex'
import sttData from './stt.js';
import { noteList } from '../api/api.js'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = this.sttData;
    
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    sttData,
    hour: '0',
    minute: '00',
    second: '00',
    audio: new Audio('https://test-buck99.s3.ap-northeast-2.amazonaws.com/news.mp3'),
    timeOffset: 0.000,
    user_id: 1,
    note_id: -1,
    noteList: [],
  },
  mutations: {
    getNoteList(state) {
      noteList.fetch(1)
        .then(data => {
          data.forEach(element => {
            var date1 = new Date(Date.parse(element.created_at));
            var date2 = new Date(Date.parse(element.updated_at));
            element.created_at = date1.getFullYear() + '/' + (parseInt(date1.getMonth()) + 1) + '/' + date1.getDate() + ' ' + date1.getHours() + ':' + (date1.getMinutes() < 10 ? '0' : '') + date1.getMinutes()
            element.updated_at = date2.getFullYear() + '/' + (parseInt(date2.getMonth()) + 1) + '/' + date2.getDate() + ' ' + date2.getHours() + ':' + (date2.getMinutes() < 10 ? '0' : '') + date2.getMinutes()
          });
          state.noteList = data;
        })
    },
    setCurrentTime(state, index) {
      var stamp = parseFloat(state.sttData[index].begin) / 1000;
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
      for (var i = 0, len = state.sttData.length; i < len; i += 1) {
        console.log(i);
        
        console.log((
          state.audio.currentTime >= (parseFloat(state.sttData[i].begin) / 1000)
          &&
          state.audio.currentTime < (parseFloat(state.sttData[i].end) / 1000)
        ));
        console.log((state.audio.currentTime < parseFloat(state.sttData[i].begin) / 1000));
        
        
        var is_current_word = (
          (
            state.audio.currentTime >= (parseFloat(state.sttData[i].begin) / 1000)
            &&
            state.audio.currentTime < (parseFloat(state.sttData[i].end) / 1000)
          )
          // ||
          // (state.audio.currentTime < parseFloat(state.sttData[i].begin) / 1000)
        );
        console.log(is_current_word);
        
        if (is_current_word) {
          word = state.sttData[i];
          console.log(word);
          break;
        }
      }

      if (!word) {
        console.log('Unable to find current word and we should always be able to.');
        
        throw Error('Unable to find current word and we should always be able to.');
      }
      return word;
    },
  }
})