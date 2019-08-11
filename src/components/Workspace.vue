<template>
    <div class="lisn-workspace">
      <player></player>
      <div class="lisn-workspace-container">
          <div class="note-container">
              <vuescroll>
                  <Note></Note>
              </vuescroll>
          </div>
          <div class="divider"></div>
          <div class="stt-container">
              <vuescroll>
                  <s-t-t></s-t-t>
              </vuescroll>
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
  }
}
</script>

<style scoped>

.divider {
  width: 1px;
  margin: 6px 0;
  background: rgb(209, 209, 209);
}
.lisn-workspace{
    padding-left: 18rem;
    padding-top: 3.5rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
}
.lisn-workspace-container{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    height: 100vh;
    margin: -7rem 0;
    padding: 7rem 0 2.2rem 0;
}
.note-container, .stt-container{
    flex: 1;
    height: auto;
    overflow: auto;
    background: white;
    box-shadow: 0 0 1rem 0rem rgba(0,0,0,.05)!important;
    border: 1px solid rgba(0, 0, 0, 0.15);
}
.note-container{
    border-radius: 0.8rem 0 0 0.8rem;
    padding: .2rem 0rem .4rem .8rem;
}
.stt-container{
    border-radius: 0 1rem  1rem 0;
    padding: 0.8rem 0rem 0.8rem 0rem
}
</style>
