<template>
    <div>
      <!-- <RecSidebar></RecSidebar> -->
      <!-- <base-header></base-header> -->
      <write-navbar v-on:saveNote="saveNote"></write-navbar>
      <Workspace ref="saveNote"></Workspace>
    </div>
</template>

<script>
// import RecSidebar from './../components/RecSidebar.vue'
import Workspace from './../components/Workspace.vue'
import WriteNavbar from '../layout/WriteNavbar'
import axios from 'axios'

export default {
  components: {
    // RecSidebar,
    Workspace,
    WriteNavbar,
  },
  data(){
    return{
      user_id: -1,
      note_id: -1,
    }
  },
  created() {
    this.$store.commit('setUserId', 'glisn_user_id');
    this.user_id = this.$store.state.user_id;
    this.$store.commit('setNoteId', 'glisn_note_id');
    this.note_id = this.$store.state.note_id;

    let self = this;
    axios.get( this.$store.state.domain + '/record/note?note_id=' + this.note_id)
      .then((res) => {
        self.$store.state.sttText = [];
        self.title = res.data.title;
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
        console.log('실패'); 
      });
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
