<template>
  <div style="background:#f0f0f0;height: 100vh;">
    <NoteNavbarRead @scrollSTT="scrollSTT" @openSTT="openSTT" @isRecording="isRecording"></NoteNavbarRead>
    <WorkspaceRead ref="workspace" :isLoading="isLoading"></WorkspaceRead>
  </div>
</template>

<script>
import WorkspaceRead from './../components/WorkspaceRead.vue'
import NoteNavbarRead from '../layout/NoteNavbarRead'
import axios from 'axios'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    WorkspaceRead,
    NoteNavbarRead,
  },
  data(){
    return{
      isLoading: true,
    }
  },
  computed: {
    ...mapState([
      'token',
      'user_id',
    ]), 
  },
  created() {
    let self = this;
    self.clear_interval_stt();
    if(!self.user_id || !self.token){
      delete localStorage.user_id;
      delete localStorage.token;
      self.$router.replace('/');
    }
    else{
      self.setNoteId(self.$route.params.nid);
      self.initData();
      self.FETCH_NOTE()
        .then(() => {
          this.isLoading = false;
        })
    }
  },
  destroyed(){
    this.clear_interval_stt();
    this.clear_playTimer();
  },
  methods: {
    ...mapMutations([
      'setNoteId',
      'initData',
      'clear_interval_stt',
      'clear_playTimer',
    ]),
    ...mapActions([
      'FETCH_NOTE',
    ]),
    isRecording(para){
      this.$refs.workspace.isRecording(para);
    },
    openSTT(){
      this.$refs.workspace.openSTT();
    },
    scrollSTT(){
      this.$refs.workspace.scrollSTT();
    },
  }
}
</script>

<style scoped>
</style>
