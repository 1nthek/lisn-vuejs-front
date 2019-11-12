<template>
    <div class="help-page">
            <div class="container">
                <div class="help-title">
                    <div class="help-list">
                        <span>제목</span>
                    </div>
                    <div class="help-title-text">
                        <input tyep="text" size="55">
                    </div>
                        
                </div>
                <div class="help-content">
                    <div class="help-list">
                        <span>내용</span>
                    </div>
                    <div class="help-content-text">
                        <textarea rows="20" cols="80"></textarea>
                    </div>
                </div>
                <div class="help-send">
                    <button class="create-btn" @click="sendHelp()" style="outline: 0;">
                        <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;font-weight: bold">
                            보내기
                        </div>
                  </button>
                </div>
            </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState([

        ]),
    },
    data() {
        return {
        }
    },
    created() {
          
    },
    methods: {
        ...mapActions([
            'HELP_SEND'
        ]),
        sendHelp() {
            Swal.fire({
            position: 'center',
            type: 'success',
            title: '소중한 의견 감사합니다.',
            showConfirmButton: false,
            timer: 1000
            }).then(result => {
                if (result.value) {
                    this.HELP_SEND();
                }
            });
        }
    }
}
</script>

<style>
.container {
    width: 80%;
    height: 80%;
    overflow: hidden;
    margin: 0 auto;
    background:#F0F0F0;
    box-shadow: 0 0 1rem 0 rgba(0,0,0,.05)!important;
    border: 1px solid rgba(0,0,0,.05);
}
.help-list {
    font-size: 2rem;
    font-weight: bold;
    color:black;
    float: left;
}
.help-title {
    margin: 20px;
    position:relative;
}
.help-content {
    margin: 20px;
    position:relative;
}
.help-title-text {
    font-size: 2rem;
    color:black;
    background: white;
    margin-left:10%;
    width: 80%;
    height: auto;
}
.help-content-text {
    font-size: 1.5rem;
    color:black;
    background: white;
    margin-left:10%;
    width: 80%;
    height: auto;
}
.help-send {
    display:block;
    text-align: center;
}
.txt1{
    font-size: 14px;
    color: #adb5bd;
}
.txt2{
    font-size: 18px;
    font-weight: bold;
}
</style>