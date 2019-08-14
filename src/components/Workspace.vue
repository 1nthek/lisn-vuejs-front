<template>
<div style="display:flex;align-items: center;justify-content: center;">
    <div class="lisn-workspace">
      <player></player>
      <div class="lisn-workspace-container workspace-width">
          <div class="stt-container ">
              <vuescroll style="min-height: fit-content;">
                  <s-t-t></s-t-t>
              </vuescroll>
          </div>
          <div class="divider"></div>
          <div class="note-container">
              <vuescroll>
                  <Note ref="saveNote"></Note>
              </vuescroll>
          </div>
      </div>
    </div>
</div>
</template>

<script>
import Note from './Note.vue'
import STT from './STT.vue'
import Player from './Player.vue'


export default {
  components: {
    Note,
    STT,
    Player
  },
  methods:{
    saveNote(){
      this.$refs.saveNote.saveNote();
    }
  }
}
</script>

<style>
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
  .workspace-width {
		width: 1000px;
	}
}

@media (min-width: 1200px) { 

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
    justify-content:space-between;
    height: 100vh;
    margin: -7.4rem 0;
    padding: 7.4rem 0 2.2rem 0;
}
.note-container, .stt-container{
    /* width: 100%; max-width: 700px; */
    flex: 1;
    height: auto;
    overflow: auto;
    background: white;
    box-shadow: 0 0 1rem 0rem rgba(0,0,0,.05)!important;
    border: 1px solid rgba(0, 0, 0, 0.15);
}
.note-container{
    border-radius: 0 1rem  1rem 0;
    padding: 1rem 1rem 1rem 1rem;
}
.stt-container{
    border-radius: 0.8rem 0 0 0.8rem;
    padding: 1rem 0rem 1rem 1rem;
}
</style>
