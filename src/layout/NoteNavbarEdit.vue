<template>
  <div class="noteNavbar-container">
      <div @click="gotoLish()" class="ns-kr go-back" style="font-size: 20px;font-weight:bold;color:black;position: relative;z-index: 2;margin: 10px;">
        <i class="fas fa-chevron-left"></i>&nbsp;노트 리스트
      </div>

      <player-edit v-on:scrollSTT="$emit('scrollSTT')" v-on:openSTT="$emit('openSTT')" v-on:isRecording="isRecording"></player-edit>

      <button v-on:click="$router.push('/note/' + note_id)" class="end-btn" style="position: relative;">
        <div class="ns-kr" style="font-size: 16px; margin: 8px 14px;font-weight: bold;width: 90px;"><i class="fas fa-edit"></i>&nbsp;작성완료</div>
      </button>
      <!-- <div v-on:click="$router.go(-1)" class="ns-kr go-back" style="font-size: 20px;font-weight:bold;color:black;position: relative;z-index: 2;margin: 10px;">
        작성 완료&nbsp;<i class="fas fa-chevron-right"></i>
      </div> -->
    </div>
</template>

<script>
import BaseNav from '../components/Navbar/BaseNav';
import PlayerEdit from '../components/PlayerEdit';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    BaseNav,
    PlayerEdit,
  },
  computed: {
    ...mapState([
      'note_id',
      'isNewNote',
    ]),
  },
  methods: {
    gotoLish(){
      if(this.isNewNote){
        this.$router.go(-1);
      }
      else{
        if(window.history.length <= 3){
          // this.$router.push('/note/' + this.note_id)
        }
        else{
          this.$router.go(-2)
        }
      }
    },
    isRecording(para){
      this.$emit('isRecording', para);
    },
  }
};
</script>
<style scoped>
.end-btn{
    background-color: #e2e2e2;
    color: black !important;
    border-radius: 0.2rem;
    outline: 0;
    margin-left: 10px;
    transition: all 200ms ease-in 0s;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
}
.end-btn:hover{
    background-color: #d3d3d3 !important
}
@media (min-width: 992px) { 
  .noteNavbar-container{
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
}

@media (min-width: 1200px) { 
  .noteNavbar-container{
    padding-right: 6rem !important;
    padding-left: 6rem !important;
  }
}
.noteNavbar-container{
  background: white !important;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 0;
  align-items: center;
  border-bottom: 1px solid #e9ecef !important;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 8px -1px;
}
.save-btn{
    background-color: #f0f0f0 !important;
    border: 1px solid black;
    border-color: #dcdfe6 !important;
    color: #000 !important;
    border-radius: 0.2rem;
}
a {
    text-decoration: none !important;
}
.nav-link{
    transition: all .4s ease 0s;
}
.nav-link:not(.btn):hover {
    background-color: hsla(0,0%,100%,.3);
    border-radius: .2rem;
    color: #fff;
    transition: all .4s ease 0s;
}
.nav-item{
    cursor: pointer;
}
.go-back{
    transition: all .4s ease 0s;
}
.go-back:hover{
    color: black !important;
    cursor: pointer;
}
</style>