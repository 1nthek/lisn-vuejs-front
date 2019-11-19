<template>
    <div class="help-page">
          <div class="container">
              <div class="card" style="box-shadow: 0 0 1rem 0 rgba(0,0,0,.05)!important;border: 1px solid rgba(0,0,0,.05);background: #F0F0F0;">
                <div class="help-title ns-kr">
                    <div class="help-list">제목</div>
                    <input type="text" class="ns-kr help-title-text" v-model="contact_title">  
                </div>
                <div class="help-content ns-kr">
                    <div class="help-list" >내용</div>
                    <textarea class="ns-kr help-content-text" v-model="contact_content"></textarea>
                </div>
                <div class="help-send">
                    <button class="create-btn" @click.prevent="sendHelp(contact_title, contact_content)" style="outline: 0;">
                        <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;font-weight: bold">보내기</div>
                  </button>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Swal from 'sweetalert2';

export default {
    computed: {
        ...mapState([
        'user_id',
        ]),
    },
    data() {
        return {
            contact_title:'',
            contact_content:'',
        }
    },
    methods: {
        ...mapActions([
            'CREATE_CONTACT'
        ]),
        sendHelp(title, content) {
          if(title == ""){
            Swal.fire('제목을 입력해주세요.')
            return;
          }
           if(content == ""){
            Swal.fire('내용을 입력해주세요.')
            return;
          }
          this.CREATE_CONTACT({title, content});
          Swal.fire({
            position: 'center',
            type: 'success',
            title: '소중한 의견 감사합니다! (꾸벅)',
            showConfirmButton: false,
            timer: 2500
          })
            this.$amplitude.setUserId(this.user_id);
            this.$amplitude.logEvent('Contact_Us');   
        }
    }
}
</script>

<style>
/* .container {
    width: 80%;
    height: 80%;
    overflow: hidden;
    margin: 0 auto;
    background:#F0F0F0;
    box-shadow: 0 0 1rem 0 rgba(0,0,0,.05)!important;
    border: 1px solid rgba(0,0,0,.05);
} */
input:focus {
    outline: none;
}
textarea:focus {
    outline: none;
}
.help-list {
    font-size: 20px;
    font-weight: bold;
    color:black;
    float: left;
}
.help-title {
    margin: 20px;
    position:relative;
    font-size: 20px;
}
.help-content {
    margin: 20px;
    position:relative;
}
.help-title-text {
    font-size: 20px;
    color:black;
    background: white;
    margin-left:10%;
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
}
.help-content-text {
    font-size: 20px;
    color:black;
    background: white;
    margin-left:10%;
    width: 80%;
    height: 30rem;
    display: flex;
    justify-content: space-between;
}
.help-send {
    display:block;
    text-align: center;
    margin-bottom: 20px;
}
</style>