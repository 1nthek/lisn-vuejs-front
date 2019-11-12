<template>
  <div style="background:#f0f0f0;height: 100vh;">
    <NoteNavbarEdit @scrollSTT="scrollSTT" @openSTT="openSTT" @isRecording="isRecording"></NoteNavbarEdit>
    <WorkspaceEdit ref="workspace" :isLoading="isLoading"></WorkspaceEdit>
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
      isLoading: true,
      isEditable: false,
    }
  },
  computed: {
    ...mapState([
      'token',
      'user_id',
      'note_id',
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
      let self = this;
      self.setNoteId(self.$route.params.nid);
      this.FETCH_EDIT(this.note_id).then(data =>{
        if( data === "editable" ){
          self.isEditable = true;
          self.initData();
          self.UPDATE_EDIT(self.note_id);
          self.FETCH_NOTE()
            .then(() => {
              this.isLoading = false;
            })
        }
        else{
          self.isEditable = false;
          self.$router.replace('/');
        }
      })
    }
  },
    // 
  mounted() {
    //IE에서는 addEventListener를 지원 안함.
    window.addEventListener('beforeunload', this.notification);
  },
  destroyed(){
    this.clear_interval_stt();
    this.clear_playTimer();
    this.clear_recordTimer();
    if(this.isEditable == true){
      this.DESTROY_EDIT(this.note_id);
    }
    window.removeEventListener('beforeunload', this.notification);
  },
  methods: {
    ...mapMutations([
      'setNoteId',
      'initData',
      'clear_interval_stt',
      'clear_playTimer',
      'clear_recordTimer',
    ]),
    ...mapActions([
      'FETCH_NOTE',
      'DESTROY_EDIT',
      'FETCH_EDIT',
      'UPDATE_EDIT',
    ]),
    notification(event){
      // Cancel the event
      event.preventDefault();
      // Chrome requires returnValue to be set
      event.returnValue = '';
    },
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
