<template>
    <div style="background:#f0f0f0;height: 100vh;">
      <NoteNavbarEdit @scrollSTT="scrollSTT" @saveNote="saveNote" @openSTT="openSTT" @isRecording="isRecording"></NoteNavbarEdit>
      <WorkspaceEdit ref="workspace"></WorkspaceEdit>
    </div>
</template>

<script>
import WorkspaceEdit from './../components/WorkspaceEdit.vue'
import NoteNavbarEdit from '../layout/NoteNavbarEdit'
import axios from 'axios'
import { mapState, mapMutations, mapActions } from 'vuex'



export default {
  components: {
    WorkspaceEdit,
    NoteNavbarEdit,
  },
  data(){
    return{
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
    if(!self.user_id || !self.token){
      delete localStorage.user_id;
      delete localStorage.token;
      self.$router.replace('/');
    }
    else{
      self.setNoteId(self.$route.params.nid);
      self.initData();
      self.FETCH_NOTE();
    }
  },
  methods: {
    ...mapMutations([
      'setNoteId',
      'initData',
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
    saveNote(){
      this.$refs.workspace.saveNote();
    }
  }
}
</script>

<style scoped>
</style>
