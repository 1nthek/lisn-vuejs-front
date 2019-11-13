<template>
  <div class="noteNavbar-container">
    <a v-on:click="$router.go(-1)" style="margin: 10px;">
      <div class="ns-kr go-back" style="font-size: 20px;font-weight:bold;color:black;position: relative;z-index: 2;">
        <i class="fas fa-chevron-left"></i>&nbsp;돌아가기
      </div>
    </a>

    <PlayerRead v-on:scrollSTT="$emit('scrollSTT')" v-on:openSTT="$emit('openSTT')" v-on:isRecording="isRecording"></PlayerRead>

    <div style="display:flex;">
      

  <base-nav style="display: flex;align-items: center;">
        <li class="nav-item dropdown">
          <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <div style="display: flex; align-items: center; position: relative; flex-direction: row-reverse; margin-right: 12px; transform: translateZ(0px);">
              <div v-for="user in sharedUserList" :key="user.user_email" >
                <div class="shared-people-cont1">
                  <div class="shared-people-cont2">
                    <div class="shared-people-cont3">
                      <div style="width: 100%; height: 100%;">
                        <img :src="user.user_picture_url" style="border-radius: 100%;width:30px">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-default" style="padding: 0">
              <ul class="dropdown-menu show dropdown-menu-right" style="min-width: 180px;cursor: default;">
                  <div class="dropdown-header noti-title dropdown-title ns-kr" style="color:black;cursor: default;text-transform: none;">
                    <div>
                      <div style="font-weight: normal;font-size: 16px;">
                        노트를 공유중...
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-divider"></div>
                  <div v-for="user in sharedUserListAll" :key="user.user_email" class="dropdown-item" style="display: flex;align-items: center;">
                    <div class="navbar-icon">
                        <img :src="user.user_picture_url" style="border-radius: 100%;width:22px">
                    </div>
                    <span class="ns-kr navbar-txt" style="font-size: 14px;">{{user.user_name}}</span>
                  </div>
              </ul>
          </div>
        </li>
  </base-nav>


      <!-- <button class="share-pelple-btn" style="position: relative;" @click="sharedPeople()">
        <div class="ns-kr" style="font-size: 16px; margin: 8px 10px;font-weight: bold;"><i class="fas fa-users"></i>&nbsp;</div>
      </button> -->
      <button class="share-btn" style="position: relative;" @click="shareNote()">
        <div class="ns-kr" style="font-size: 16px; margin: 8px 20px;font-weight: bold;width: 40px;">공유</div>
        <!-- <div class="ns-kr" style="font-size: 16px; margin: 8px 20px;font-weight: bold;"><i class="fas fa-share"></i>&nbsp;공유</div> -->
      </button>
      <button class="edit-btn" style="position: relative;" @click="editNote()">
        <div class="ns-kr" style="font-size: 16px; margin: 8px 20px;font-weight: bold;width: 60px;">수정하기</div>
        <!-- <div class="ns-kr" style="font-size: 16px; margin: 8px 20px;font-weight: bold;"><i class="fas fa-pencil-alt"></i>&nbsp;수정</div> -->
      </button>
    </div>

    </div>
</template>

<script>
import PlayerRead from '../components/PlayerRead'
import BaseNav from '../components/Navbar/BaseNav';
import Swal from 'sweetalert2';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    PlayerRead,
  },
  computed: {
    ...mapState([
      'note_id',
      'sharedUserList',
      'sharedUserListAll',
    ]),
  },
   methods: {
    ...mapActions([
      'SHARE_NOTE',
      'UPDATE_EDIT',
      'FETCH_EDIT',
      'FETCH_SHAREDUSER_LISTS',
    ]),
    isRecording(para){
      this.$emit('isRecording', para);
    },
    editNote(){
      let self = this;
      this.FETCH_EDIT(this.note_id).then(data =>{
        if( data === "editable" ){
          self.UPDATE_EDIT(self.note_id);
          self.$router.push('/noteEdit/'+ self.note_id);
        }
      })
    },
    async shareNote(){
      const { value: email } = await Swal.fire({
        title: '노트 공유하기',
        input: 'email',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        confirmButtonText: '공유',
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
        this.SHARE_NOTE(email);
      }
    },
   }
};
</script>
<style scoped>
.shared-people-cont1{
  border-radius: 30px; 
  margin-left: -10px; 
  position: relative;
}
.shared-people-cont2{
  background: white;
  border-radius: 100%;
  box-shadow: rgba(15, 15, 15, 0.2) 0px 2px 4px;
}
.shared-people-cont3{
  position: relative;
  border-radius: 100%;
  background: white; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  user-select: none; 
  opacity: 0.8;
  transition: all 200ms ease-in 0s;
}
.shared-people-cont3:hover{
  opacity: 1;
}
.shared-people-img{
  display: block;
  object-fit: cover;
  border-radius: 100%;
  width: 100%;
  height: 100%;
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
.edit-btn{
    background-color: #f1404b !important;
    border: 1px solid black;
    border-color: #f1404b !important;
    color: white !important;
    border-radius: 0.2rem;
    outline: 0;
    margin-left: 10px;
    transition: all 200ms ease-in 0s;
}
.edit-btn:hover{
    background-color: #e1424c !important;
}
.share-btn{
    background-color: #e5e5e5 !important;
    border: 1px solid black;
    border-color: #F0F0F0 !important;
    color: black !important;
    border-radius: 0.2rem;
    outline: 0;
    transition: all 200ms ease-in 0s;
}
.share-btn:hover{
    background-color: #dddddd !important;
}
.share-pelple-btn{
    background-color: #F0F0F0 !important;
    border: 1px solid black;
    border-color: #F0F0F0 !important;
    color: black !important;
    border-radius: 0.2rem;
    outline: 0
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