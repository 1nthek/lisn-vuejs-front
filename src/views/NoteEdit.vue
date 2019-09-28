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

export default {
  components: {
    // RecSidebar,
    WorkspaceEdit,
    NoteNavbarEdit,
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
          if (auth2.isSignedIn.get() == true) {            
            self.$store.commit('setUserId');
            self.user_id = self.$store.state.user_id;
            
            if(self.user_id == null){
              var auth2 = gapi.auth2.getAuthInstance();
              localStorage.removeItem('glisn_user_id');
              localStorage.removeItem('glisn_note_id');
              auth2.signOut();
              auth2.disconnect();
              self.$router.push('/');
            }
            else{
              self.$store.commit('setNoteId');
              self.note_id = self.$store.state.note_id;

              if(self.note_id == null)
                self.$router.push('/list');
              else{
                self.$store.state.hour = '0';
                self.$store.state.minute = '00';
                self.$store.state.second = '00';
                self.$store.state.audio.src = "";
                self.$store.state.timeOffset =  0.000;
                self.$store.state.isRecordable =  true;
                
                axios.get( self.$store.state.domain + '/note?note_id=' + self.note_id)
                  .then((res) => {
                    self.$store.state.sttText = [];
                    self.$store.state.noteTitle = res.data.title;
                    self.$store.state.content = res.data.content;
                    self.$store.state.note_started_at = res.data.started_at;
                    self.$store.state.note_ended_at = res.data.ended_at;

                    res.data.audios.forEach(element => {
                      self.$store.state.isRecordable = false;
                      
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
                }
            }
          }
          else{
            self.$router.push('/');
          }
        });
    });

  },
  beforeDestroy() {
    
  },
  methods: {
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
