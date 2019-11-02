<template>
<div style="display:flex;align-items: center;justify-content: center;">
    <div class="lisn-workspace">
      <div class="lisn-workspace-container workspace-width">
          <s-t-t ref="stt"></s-t-t>
          <div class="divider"></div>
          <div class="note-container">
            <template v-if="isLoading">
              <div class="cont-isLoading">
                <div class="list-isLoading"></div>
              </div>
            </template>
            <template v-else>
              <NoteEdit ref="note"></NoteEdit>                
            </template>
          </div>
      </div>
    </div>
</div>
</template>

<script>
import NoteEdit from './NoteEdit.vue'
import STT from './STT.vue'

export default {
  components: {
    NoteEdit,
    STT,
  },
  props: {
    isLoading: Boolean,
  },
  methods:{
    isRecording(para){
      this.$refs.stt.isRecording(para);
    },
    openSTT(){
      this.$refs.stt.openSTT();
    },
    saveNote(){
      this.$refs.note.saveNote();
    },
    scrollSTT(){
      this.$refs.stt.scrollSTT();
    }
  }
}
</script>

<style>
.list-isLoading,
.list-isLoading:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.list-isLoading {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid #e1207920;
  border-right: 1.1em solid #e1207920;
  border-bottom: 1.1em solid #e1207920;
  border-left: 1.1em solid #e12079;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}
.cont-isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
}

@-webkit-keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.workspace-width{
	width:100%
}
@media (min-width: 576px) { 

}

@media (min-width: 768px) { 
  .workspace-width {
		width: 700px;
	}
}

@media (min-width: 992px) { 
  .lisn-workspace-container{
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
}

@media (min-width: 1200px) { 
  .lisn-workspace-container{
    padding-right: 6rem !important;
    padding-left: 6rem !important;
  }
}

.__view{
  min-height: fit-content !important;
}
.divider {
  width: 1px;
  margin: 6px 0;
  background: rgb(209, 209, 209);
}
.lisn-workspace{
    padding-left: 2rem;
    padding-top: 0;
    padding-bottom: 2rem;
    padding-right: 2rem;
}
.lisn-workspace-container{
  word-break: break-word;
    display: flex;
    flex-direction: row;
    /* justify-content:space-between; */
    height: 100vh;
    width: 100vw;
    margin: -7.4rem 0;
    padding: 9rem 0 0rem 0;
}
.note-container, .stt-container{
    height: auto;
    overflow: auto;
    background: white;
    box-shadow: 0 0 1rem 0rem rgba(0,0,0,.05)!important;
    border: 1px solid rgba(0, 0, 0, 0.15);
}
.note-container{
    border-radius: 0 1rem  1rem 0;
    padding: 1rem 1rem 1rem 1rem;
    flex: 1;
}
.stt-container{
    border-radius: 0.8rem 0 0 0.8rem;
    padding: 1rem 0rem 1rem 1rem;
    flex: 0 !important;
    overflow: hidden;
    transition: all 0.6s ease;
    min-width: 110px;
}
</style>
