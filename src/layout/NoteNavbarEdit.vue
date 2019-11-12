<template>
  <div class="noteNavbar-container">
    <a v-on:click="$router.go(-1)" style="margin: 10px;">
      <div class="ns-kr go-back" style="font-size: 20px;font-weight:bold;color:black;position: relative;z-index: 2;">
        <i class="fas fa-chevron-left"></i>&nbsp;작성 완료
      </div>
    </a>

    <player-edit v-on:scrollSTT="$emit('scrollSTT')" v-on:openSTT="$emit('openSTT')" v-on:isRecording="isRecording"></player-edit>
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
    ]),
  },
  methods: {
    ...mapActions([
      'DESTROY_EDIT',
    ]),
    isRecording(para){
      this.$emit('isRecording', para);
    },
  }
};
</script>
<style scoped>
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