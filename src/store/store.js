import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { setTokenInHeader } from '../api/api'
import * as api from '../api/api'
import fecha from 'fecha'
import router from '../router'
import Swal from 'sweetalert2';
import { Editor, EditorContent, } from 'tiptap'
import {
  Blockquote, CodeBlock, HardBreak, Heading, OrderedList, BulletList, ListItem, TodoItem, TodoList, Bold, Code, Italic, Link, Strike, Underline, History, HorizontalRule, Focus, Placeholder
} from 'tiptap-extensions'
// import { resolve } from 'dns'


Vue.use(Vuex);

// fecha.i18n = {
//   dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
//   dayNames: ['Sunday', 'Monday', '화요일', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//   monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//   amPm: ['오전', '오후'],
//   // D is the day of the month, function returns something like...  3rd or 11th
//   DoFn: function (D) {
//     return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10]
//   }
// }

export const store = new Vuex.Store({
  state: {
    //real server
    domain: 'https://lisn.ai/api',
    // baseDomain: 'http://54.180.86.133/',
    // baseURL=`${baseDomain}/api`,

    hour: '0',
    minute: '00',
    second: '00',

    recordTimer: null,
    playTimer: null,
    audio: new Audio(),
    timeOffset: 0.000,
    rec_length: 0,
    isPlaying: false,

    noteList: [],
    noteTitle: "",

    note_created_at: "",
    note_updated_at: "",

    content: "",
    isRecording: false,
    isRecordable: true,
    error: false,
    directories: [],

    token: null,
    user_id: null,
    note_id: null,
    directory_id: null,
    directory_name: "모든 노트",
    sttText: [],

    audio_id: null,

    user_name: null,
    user_email: null,
    user_picture_url: null,
    user_audio_usage: null,
    user_num_of_notes: null,

    interval_stt: null,
    colored_stt_id: null,

    tiptap_editor: new Editor({
      onUpdate: ({ state, getHTML, getJSON, transaction }) => {
        store.dispatch('UPDATE_NOTE', { title: store.state.noteTitle, content: getHTML() });
      },
      extensions: [
        new Blockquote(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History(),
        new HorizontalRule(),
        new Focus(),
        new Placeholder({
          emptyNodeClass: 'is-empty',
          emptyNodeText: '상단의 녹음 버튼을 누르면, 주변 음성이 텍스트로 변환됩니다.\n음식 인식 중에 이곳에 노트를 작성할 수 있습니다.',
          showOnlyWhenEditable: false,
        }),
      ],
      content: "",
      // autoFocus: true,
    }),
  },
  getters: {
    isAuth(state) {
      return state.token && state.user_id;
    }
  },
  mutations: {
    clear_interval_stt(state){
      if (state.interval_stt != null) {
        clearInterval(state.interval_stt);
      }
    },
    clear_recordTimer(state) {
      if (state.recordTimer != null) {
        state.rec_length = state.timeOffset
        clearInterval(state.recordTimer);
      }
    },
    clear_playTimer(state){
      if (state.playTimer != null) {
        state.rec_length = state.timeOffset
        clearInterval(state.playTimer);
      }
    },
    clear_player_data(state){
      state.hour = '0';
      state.minute = '00';
      state.second = '00';
      state.timeOffset = 0;
      state.rec_length = 0;
      state.audio_timestamp = [];
      state.sttText = [];
    },
    set_isPlaying(state, val){
      state.isPlaying = val;
    },
    set_isRecording(state, val) {
      state.isRecording = val;
    },
    set_isRecordable(state, val) {
      state.isRecordable = val;
    },
    set_noteTitle(state, val){
      state.noteTitle = val;
    },
    onRefresh(state, { token, user_id }) {
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
      else {
        state.token = token;
        state.user_id = user_id;
        api.setTokenInHeader(token);
      }
    },
    logout(state) {
      state.token = null;
      state.user_id = null;
      delete localStorage.token;
      delete localStorage.user_id;
      api.setTokenInHeader(null);
    },
    initData(state){
      if (state.interval_stt != null) {
        clearInterval(state.interval_stt);
      }
      if (state.recordTimer != null) {
        clearInterval(state.recordTimer);
      }
      if (state.playTimer != null) {
        clearInterval(state.playTimer);
      }

      state.audio.pause();
      state.hour = '0';
      state.minute = '00';
      state.second = '00';

      state.audio = new Audio();
      state.timeOffset = 0.000;
      state.rec_length = 0;
      state.isPlaying = false;

      // state.noteTitle = "";
      state.content = "";
      state.isRecordable = true;

      state.sttText = [];
      state.interval_stt = null;
      // state.colored_stt_id = null;
    },
    initRecording(state) {
      if (state.interval_stt != null) {
        clearInterval(state.interval_stt);
      }
      if (state.recordTimer != null) {
        clearInterval(state.recordTimer);
      }
      if (state.playTimer != null) {
        clearInterval(state.playTimer);
      }

      state.audio.pause();
      state.hour = '0';
      state.minute = '00';
      state.second = '00';

      state.audio = new Audio();
      state.timeOffset = 0.000;
      state.rec_length = 0;
      state.isPlaying = false;
      state.isRecordable = true;
      state.sttText = [];
    },
    setNoteData(state, value) {
      let self = this;
      state.tiptap_editor.setContent(value.content)
      state.noteTitle = value.title;
      state.content = value.content;

      var date = new Date(value.created_at);
      state.note_created_at = date.getFullYear() + ". " + (parseInt(date.getMonth()) + 1) + ". " + date.getDate() + ". " + (parseInt(date.getHours()) > 12 ? "오후 " + parseInt(date.getHours() - 12) : "오전 " + date.getHours()) + "시 " + date.getMinutes() + "분";
      date = new Date(value.updated_at);
      state.note_updated_at = date.getFullYear() + ". " + (parseInt(date.getMonth()) + 1) + ". " + date.getDate() + ". " + (parseInt(date.getHours()) > 12 ? "오후 " + parseInt(date.getHours() - 12) : "오전 " + date.getHours()) + "시 " + date.getMinutes() + "분";

      value.audios.forEach(element => {
        state.isRecordable = false;
        var audio_id = element.audio_id;
        var sentences = element.sentences;
        var idx = 0;

        sentences.forEach(ele => {
          state.sttText.push({ content: ele.content, id: idx++, begin: ele.started_at, end: ele.ended_at, audioId: audio_id });
        })
        axios.get(state.domain + "/note/audio?audio_id=" + audio_id)
          .then((res) => {
            state.audio.src = res.data.audio_url;
          })
      });
    },
    pauseSound(state){
      state.isPlaying = false;
      state.audio.pause();
      state.timeOffset = state.audio.currentTime;
      if (state.interval_stt != null) {
        clearInterval(state.interval_stt);
      }
      if (state.playTimer != null) {
        clearInterval(state.playTimer);
      }
    },
    playSound(state) {
      if (state.interval_stt != null) {
        clearInterval(state.interval_stt);
      }
      if (state.recordTimer != null) {
        clearInterval(state.recordTimer);
      }
      if (state.playTimer != null) {
        clearInterval(state.playTimer);
      }

      state.isPlaying = true;
      state.audio.currentTime = state.timeOffset;
      state.audio.play();
      
      state.playTimer = setInterval(() => {
        var curTime = state.audio.currentTime;
        state.hour = Math.floor(curTime / 3600);
        state.hour = (state.hour >= 10) ? state.hour : state.hour;
        state.minute = Math.floor((curTime / 60) % 60);
        state.minute = (state.minute >= 10) ? state.minute : "0" + state.minute;
        state.second = Math.floor(curTime % 60);
        state.second = (state.second >= 10) ? state.second : "0" + state.second;
      }, 1000)
      
      state.interval_stt = setInterval(() => {
        var curTime = state.audio.currentTime*1000;
        if (state.colored_stt_id != null){
          document.getElementById("stt-" + state.colored_stt_id).style.backgroundColor = "white";
          document.getElementById("stt-" + state.colored_stt_id).style.color = "black";
          document.getElementById("stt-" + state.colored_stt_id).style.fontWeight = "normal";
          state.colored_stt_id = null;
        }
        for (let i = 0; i < state.sttText.length;++i){
          if (state.sttText[i].begin > curTime){
            break;  //없음
          }
          else if (state.sttText[i].begin <= curTime && state.sttText[i].end-200 >= curTime){
            document.getElementById("stt-" + state.sttText[i].id).style.backgroundColor = "#4089FF";
            document.getElementById("stt-" + state.sttText[i].id).style.color = "white";
            document.getElementById("stt-" + state.sttText[i].id).style.fontWeight = "bold";
            state.colored_stt_id = state.sttText[i].id;
            break;
          }
        }
      }, 500)
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

    recordingTimer(state) {
      state.timeOffset = 0;
      state.rec_length = 0;
      state.recordTimer = setInterval(() => {
        state.timeOffset = state.timeOffset + 1;
        var curTime = state.timeOffset;
        state.hour = Math.floor(curTime / 3600);
        state.hour = (state.hour >= 10) ? state.hour : state.hour;
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
      state.hour = (state.hour >= 10) ? state.hour : state.hour;
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
    SET_LISTS(state, notes) {
      notes.forEach(element => {
        if (element.title == "") {
          element.title = "untitled";
        }
        var date1 = new Date(Date.parse(element.created_at));
        var date2 = new Date(Date.parse(element.updated_at));
        element.created_at = date1.getFullYear() + '.' + (parseInt(date1.getMonth()) + 1) + '.' + date1.getDate() + '&nbsp;&nbsp;' + date1.getHours() + ':' + (date1.getMinutes() < 10 ? '0' : '') + date1.getMinutes()
        element.updated_at = date2.getFullYear() + '.' + (parseInt(date2.getMonth()) + 1) + '.' + date2.getDate() + '&nbsp;&nbsp;' + date2.getHours() + ':' + (date2.getMinutes() < 10 ? '0' : '') + date2.getMinutes()
      });
      state.noteList = notes;
    },
    SET_DIRECTORIES(state, directories) {
      state.directories = directories;
    },
    SET_DIRECTORY_ID(state, directory_id) {
      state.directory_id = directory_id;
    },
    SET_DIRECTORY_NAME(state, directory_name) {
      state.directory_name = directory_name;
    },
    SET_PROFILE(state, data) {
      state.user_name = data.user_name;
      state.user_email = data.user_email;
      state.user_picture_url = data.user_picture_url;
    },
    SET_USAGE(state, data) {
      state.user_audio_usage = data.user_audio_usage;
      state.user_num_of_notes = data.user_num_of_notes;
    },
  },
  actions: {
    FETCH_LISTS({ state, commit }) {
      return api.list.fetch(state.user_id).then(data => {
        commit('SET_DIRECTORY_ID', null);
        commit('SET_LISTS', data.notes);
        commit('SET_DIRECTORY_NAME', "모든 노트")
      })
    },
    FETCH_SHARED_LISTS({ state, commit }) {
      return api.list.fetch_shared(state.user_id).then(data => {
        commit('SET_LISTS', data.notes);
        commit('SET_DIRECTORY_NAME', "공유 받은 노트")
      })
    },
    FETCH_DIRECTORY_LISTS({ state, commit }, { directory_id, directory_name }) {
      return api.list.fetch_directory(directory_id).then(data => {
        commit('SET_DIRECTORY_ID', directory_id);
        commit('SET_LISTS', data.notes);
        commit('SET_DIRECTORY_NAME', directory_name)
      })
    },
    FETCH_TRASH_LISTS({ state, commit }) {
      return api.list.fetch_trash(state.user_id).then(data => {
        commit('SET_LISTS', data.notes);
        commit('SET_DIRECTORY_NAME', "휴지통")
      })
    },

    FETCH_DIRECTORIES({ state, commit }) {
      return api.directory.fetch(state.user_id).then(data => {
        commit('SET_DIRECTORIES', data.directories)
      })
    },
    CREATE_DIRECTORY({ state, commit, dispatch }, ) {
      var formData = new FormData();
      formData.append('user_id', state.user_id);
      return api.directory.create(formData).then(data => {
        dispatch('FETCH_DIRECTORIES')
      })
    },
    MOVE_DIRECTORY({ state, commit, dispatch }, { note_id, directory_id }) {
      var formData = new FormData();
      formData.append('note_id', note_id);
      formData.append('directory_id', directory_id);

      return api.directory.move(formData).then(data => {
        Swal.fire({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 1600,
          type: 'success',
          title: '폴더가 이동 되었습니다.'
        })
        if (state.directory_id != null) {
          const directory_id = state.directory_id
          const directory_name = state.directory_name
          dispatch('FETCH_DIRECTORY_LISTS', { directory_id, directory_name });
        }
      })
    },
    UPDATE_DIRECTORY({ state, commit, dispatch }, { directory_id, directory_name }) {
      var formData = new FormData();
      formData.append('directory_id', directory_id);
      formData.append('name', directory_name);
      return api.directory.update(formData).then(data => {
        dispatch('FETCH_DIRECTORIES')
        if (directory_id == state.directory_id) {
          commit('SET_DIRECTORY_NAME', directory_name)
        }
      })
    },
    DESTROY_DIRECTORY({ state, commit, dispatch }, directory_id) {
      var formData = new FormData();
      formData.append('directory_id', directory_id);
      return api.directory.destroy(formData).then(data => {
        dispatch('FETCH_DIRECTORIES')
      })
    },

    CREATE_NOTE({ state, commit, dispatch }) {
      var formData = new FormData();
      formData.append('user_id', state.user_id);
      return api.note.create(formData).then(data => {
        dispatch('UPDATE_EDIT', data.note_id);
        router.push('/noteEdit/' + data.note_id);
      })
    },
    FETCH_NOTE({ state, commit }) {
      return api.note.fetch(state.note_id).then(data => {
        commit('setNoteData', data);
      })
    },
    SHARE_NOTE({ state, commit }, email) {
      var formData = new FormData();
      formData.append('email', email);
      formData.append('note_id', state.note_id);
      return api.note.share(formData)
        .then(data => {
          Swal.fire('공유 성공: ' + email)
        })
        .catch(err => {
          if (err.status == 400 && err.data == "Already Exist") {
            Swal.fire('이미 공유된 이메일: ' + email)
          }
          else if (err.status == 400) {
            Swal.fire('존재하지 않는 이메일: ' + email)
          }
        })
    },
    UNSHARE_NOTE({ state, commit, dispatch }, note_id ) {
      var formData = new FormData();
      formData.append('note_id', note_id);
      formData.append('user_id', state.user_id);
      return api.note.unshare(formData)
        .then(data => {
          dispatch('FETCH_SHARED_LISTS');
          Swal.fire({
            title: '공유를 해제 하였습니다.',
            // type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false
          });
        })
        .catch(err => {
        })
    },
    UPDATE_NOTE({ state, commit, dispatch }, { title, content}){
      var formData = new FormData();
      formData.append('note_id', state.note_id);
      formData.append('title', title);
      formData.append('content', content);

      return api.note.update(formData)
        .then(data => {
        })
        .catch(err => {
          console.log('저장 실패');
        })
    },
    DESTROY_NOTE({ commit, dispatch }, { note_id, title }) {
      var formData = new FormData();
      formData.append('note_id', note_id);
      return api.note.destroy(formData)
        .then(data => {
          dispatch('FETCH_LISTS');
          // Swal.fire({
          //   title: '삭제',
          //   text: `노트를 휴지통에 버렸습니다.`,
          //   type: 'success',
          //   confirmButtonClass: 'btn btn-success btn-fill',
          //   buttonsStyling: false
          // });
        })
        .catch(err => {
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            type: 'error',
            title: '노트 삭제 실패',
          });
        })
    },
    TRASH_NOTE({ commit, dispatch }, note_id) {
      var formData = new FormData();
      formData.append('note_id', note_id);
      return api.trash.destroy(formData)
        .then(data => {
          dispatch('FETCH_TRASH_LISTS');
          Swal.fire({
            position: 'center',
            type: 'success',
            title: '노트를 삭제 하였습니다.',
            showConfirmButton: false,
            timer: 1000
          });
        })
        .catch(err => {
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            type: 'error',
            title: '노트 삭제 실패',
          });
        })
    },
    RESTORE_NOTE({ state, commit, dispatch }, note_id) {
      var formData = new FormData();
      formData.append('note_id', note_id);
      return api.trash.restore(formData)
        .then(data => {
          dispatch('FETCH_TRASH_LISTS');
          Swal.fire({
            position: 'center',
            type: 'success',
            title: '복구 완료',
            showConfirmButton: false,
            timer: 1000
          })
        })
    },

    FETCH_EDIT({ state, commit, dispatch }, note_id) {
      return new Promise(function (resolve, reject) {
        api.edit.fetch(note_id).then(data => {
          if (data.edit_user_id === "None" || data.edit_user_id == state.user_id) {
            resolve("editable");
          }
          else{
            Swal.fire({
              position: 'center',
              // type: 'error',
              title: "동시 수정 불가",
              html: data.edit_user_name + "&nbsp;&lt;" + data.edit_user_email + "&gt;<br>님이 수정중입니다.",
              confirmButtonClass: 'btn btn-danger btn-fill',
              confirmButtonText: '닫기',
              buttonsStyling: false
            });
            resolve("not-editable");
          }
        })
      });


    },
    UPDATE_EDIT({ state, commit, dispatch }, note_id ) {
      var formData = new FormData();
      formData.append('user_id', state.user_id);
      formData.append('note_id', note_id);       
      return api.edit.update(formData);
    },
    DESTROY_EDIT({ state, commit, dispatch }, note_id ) {
      var formData = new FormData();
      formData.append('user_id', state.user_id);
      formData.append('note_id', note_id)
      return api.edit.destroy(formData);
    },

    FETCH_AUDIO({ state, commit }, audio_id) {
      return api.audio.fetch(audio_id).then(data => {
        state.audio.src = data.audio_url;
      })
    },

    FETCH_PROFILE({ state, commit }) {
      return api.profile.fetch(state.user_id).then(data => {
        commit('SET_PROFILE', data);
      })
    },

    FETCH_USAGE({ state, commit }) {
      return api.usage.fetch(state.user_id).then(data => {
        commit('SET_USAGE', data);
      })
    }
  }
})

const { token, user_id } = localStorage
store.commit('onRefresh', { token, user_id })