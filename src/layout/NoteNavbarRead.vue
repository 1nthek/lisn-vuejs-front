<template>
  <div class="noteNavbar-container">
    <router-link to="/list" style="margin: 10px;">
      <div class="ns-kr go-back" style="font-size: 20px;font-weight:bold;color:black;position: relative;z-index: 2;">
        <i class="fas fa-chevron-left"></i>&nbsp;내 노트
      </div>
    </router-link>

    <PlayerRead v-on:scrollSTT="$emit('scrollSTT')" v-on:openSTT="$emit('openSTT')" v-on:isRecording="isRecording"></PlayerRead>

    <div>
      <button class="share-btn" style="position: relative;" @click="shareNote()">
        <div class="ns-kr" style="font-size: 16px; margin: 8px 20px;font-weight: bold;"><i class="fas fa-share"></i>&nbsp;공유</div>
      </button>
      <button class="edit-btn" style="position: relative;" @click="editNote()">
        <div class="ns-kr" style="font-size: 16px; margin: 8px 20px;font-weight: bold;"><i class="fas fa-pencil-alt"></i>&nbsp;수정</div>
      </button>
    </div>

    </div>
</template>

<script>
import PlayerRead from '../components/PlayerRead'
import Swal from 'sweetalert2';
import axios from 'axios'

export default {
  components: {
    PlayerRead,
  },
   methods: {
    isRecording(para){
      this.$emit('isRecording', para);
    },
    editNote(){
      this.$router.push('/noteEdit');
    },
    async shareNote(){
      const { value: email } = await Swal.fire({
        title: '노트 공유하기',
        input: 'email',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-danger btn-fill',
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        buttonsStyling: false,
        inputPlaceholder: '공유할 사용자의 이메일을 적으세요',
        inputValidator: (value) => {
          if (!value) {
            return '이메일을 입력하세요'
          }
        }
      })

      if (email) {
        var self = this;
        var formData = new FormData();
        formData.append('note_id', this.$store.state.note_id);
        formData.append('email', email);
        
        axios.post(this.$store.state.domain + '/note/shared', formData)
          .then((res) => {
            Swal.fire('Entered email: ' + email)
          })
          .catch((ex) => {
          })
      }
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
.edit-btn{
    background-color: #f1404b !important;
    border: 1px solid black;
    border-color: #f1404b !important;
    color: white !important;
    border-radius: 0.2rem;
}
.share-btn{
    background-color: #40A1D3 !important;
    border: 1px solid black;
    border-color: #40A1D3 !important;
    color: white !important;
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