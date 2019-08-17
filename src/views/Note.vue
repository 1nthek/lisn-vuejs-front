<template>
    <div>
      <!-- <RecSidebar></RecSidebar> -->
      <!-- <base-header></base-header> -->
      <note-navbar v-on:saveNote="saveNote"></note-navbar>
      <Workspace ref="saveNote"></Workspace>
    </div>
</template>

<script>
// import RecSidebar from './../components/RecSidebar.vue'
import Workspace from './../components/Workspace.vue'
import NoteNavbar from '../layout/NoteNavbar'
import axios from 'axios'

export default {
  components: {
    // RecSidebar,
    Workspace,
    NoteNavbar,
  },
  data(){
    return{
      user_id: -1,
      note_id: -1,
    }
  },
  created() {
    let self = this;
    gapi.load('auth2', function () {
        gapi.auth2.init().then(function () {
          var auth2 = gapi.auth2.getAuthInstance();
          if (auth2.isSignedIn.get() == false) {
            self.$router.push('/home');
          }
        });
    });

    this.$store.commit('setUserId', 'glisn_user_id');
    this.user_id = this.$store.state.user_id;
    this.$store.commit('setNoteId', 'glisn_note_id');
    this.note_id = this.$store.state.note_id;

    this.$store.state.hour = '0';
    this.$store.state.minute = '00';
    this.$store.state.second = '00';
    this.$store.state.audio.src = "";
    this.$store.state.timeOffset =  0.000;
    
    // let self = this;
    axios.get( this.$store.state.domain + '/record/note?note_id=' + this.note_id)
      .then((res) => {
        self.$store.state.sttText = [];
        self.$store.state.noteTitle = res.data.title;
        self.$store.state.content = res.data.content;

        res.data.audios.forEach(element => {
          var audio_id = element.audio_id;
          var sentences = element.sentences;
          var idx=0;
          sentences.forEach(ele => {
            self.$set(self.$store.state.sttText, idx++, {content: ele.content, id: idx, begin: ele.started_at, audioId: audio_id});
          })
        });
      })
      .catch((ex) => { 
      });
  },
  beforeDestroy() {
    
  },
  methods: {
    saveNote(){
      this.$refs.saveNote.saveNote();
    }
  }
}
</script>

<style scoped>
</style>
