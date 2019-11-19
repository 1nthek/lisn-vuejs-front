<template>
<div class="stt-container" ref="container" :class="{show: !isMinimized}">
  <div style="display: flex;margin-left: 8px;;font-size: 18px;">
    <div class="bar-icon" @click="isMinimized =! isMinimized">
      <i v-if="isMinimized" class="fas fa-angle-double-right"></i>
      <i v-if="!isMinimized" class="fas fa-angle-double-left">
        <span class="ns-kr" style="padding-left: 12px;font-size: 19px;font-weight: bold;">실시간 음성 인식</span>
      </i>
    </div>
  </div>
  <vuescroll ref="vs">
        <div class="lisn-stt-container">
          <ul id="v-for-object" class="demo">
            <template v-for="item in this.$store.state.sttText" >
              <div style="padding: 0.5rem 0; margin:5px" :key="item.id">
                  <div class="single-stt-cont" style="display:flex;">
                    <div v-show="!isMinimized" style="font-size: 23px;" class="stt-icon">
                      <i class="fas fa-user-circle"></i>
                    <div v-if="!isMinimized" class="modify-stt-btn" @click="editingSTT(item)">
                      <i class="fas fa-edit"></i>
                    </div>
                    </div>
                    <div>
                      <div style="margin: 8px 0 2px 10px;display:flex">
                        {{ parseInt(parseInt(item.begin/1000)/3600)%60 == 0 ? '' : parseInt(parseInt(item.begin/1000)/3600)%60 }}{{ parseInt(parseInt(item.begin/1000)/3600)%60 == 0 ? '' : ':'}}{{ parseInt(parseInt(item.begin/1000)/60)%60 &lt; 10 ? '0' : ''}}{{ parseInt(parseInt(item.begin/1000)/60)%60 }}:{{ parseInt(item.begin/1000)%60 &lt; 10 ? '0' : '' }}{{ parseInt(item.begin/1000)%60 }}
                        ~&nbsp;{{ parseInt(parseInt(item.end/1000)/3600)%60 == 0 ? '' : parseInt(parseInt(item.end/1000)/3600)%60 }}{{ parseInt(parseInt(item.end/1000)/3600)%60 == 0 ? '' : ':'}}{{ parseInt(parseInt(item.end/1000)/60)%60 &lt; 10 ? '0' : ''}}{{ parseInt(parseInt(item.end/1000)/60)%60 }}:{{ parseInt(item.end/1000)%60 &lt; 10 ? '0' : '' }}{{ parseInt(item.end/1000)%60 }}
                      </div>
                      <div v-show="!isMinimized">
                        <div class="stt-content" @click="getAudioAndPlay(item)" :id="`stt-${item.id}`" v-html="item.content"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </template>
          </ul>
        </div>
  </vuescroll>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data(){
    return{
      audioId: -1,
      isMinimized: true,
      isEditingSTT: false,
    }
  },
  beforeDestroy(){
    if(document.getElementById('screenBlur')){
      document.getElementById('screenBlur').remove()
    }
  },
  computed:{
    ...mapState([
      'isRecording',
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentTime',
      'playSound',
      'set_sttText',
    ]),
    ...mapActions([
      'FETCH_AUDIO',
      'UPDATE_SENTENCE',
      'FETCH_SENTENCE',
    ]),
    editingSTT(item){
      var ele = document.createElement('div');
      ele.setAttribute("contentEditable", true);
      ele.setAttribute("id", 'editSTT');
      ele.classList.add('stt-content-edit')
      ele.innerHTML = item.content
      document.getElementById(`stt-${item.id}`).parentElement.prepend(ele)
      var ele2 = document.createElement('div')
      ele2.setAttribute("id", 'screenBlur');
      ele2.classList.add('screen-blur')
      ele2.onclick = async () =>  { 
        const sentence_id = item.id
        const content = ele.innerHTML
        if(this.isRecording){
          this.set_sttText({sentence_id, content})
        }
        else{
          await this.UPDATE_SENTENCE({sentence_id, content})
          await this.FETCH_SENTENCE(sentence_id)
        }
        document.getElementById('editSTT').remove()
        document.body.removeChild(ele2)
      };
      document.body.appendChild(ele2)
    },
    openSTT(){
      this.isMinimized = false;
    },
    scrollSTT(){
      this.$refs['vs'].scrollTo(
        { y: this.$refs['vs'].$el.childNodes[0].childNodes[0].scrollHeight },1000);
    },
    async getAudioAndPlay(item) {
      if(this.isRecording == true){
        Swal.fire({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 2000,
          type: 'error',
          title: '녹음중에는 재생을 할 수 없습니다'
        })
      }
      else{
        this.audioId = JSON.parse(JSON.stringify(item.audioId))
        await this.FETCH_AUDIO(this.audioId);
        this.setCurrentTime(item);
        this.playSound();
      }
    },
  }
}
</script>

<style>
.screen-blur{
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 1060;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    cursor: default;
    /* transition: all 100ms ease-in 0s; */
}
.modify-stt-btn{
    opacity: 0;
    font-size: 15px;
    cursor: pointer;
    transition: 200ms ease-in 0s;
    border-radius: 3px;
    padding: 0px 0px 1px 4px;
    width: 23px;
    color: #C3C2C0;
    margin-top: 1px;
}
.modify-stt-btn:hover{
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 16px;
  background: #eaeaea;
  color: black;
}
.single-stt-cont:hover .modify-stt-btn{
  opacity: 1;
}
.bar-icon:hover{
  cursor: pointer;
}
.stt-hidden .stt-content, .stt-hidden .stt-icon{
  display: none !important;
}
.show.stt-container{
  flex: 1 !important;
}
span{
    font-weight: 400;
    width: fit-content;
}
.stt-content-edit{
  padding: 6px 7px;
  border-radius: 5px;
  /* transition: all 1s ease-in 1s; */
  width: fit-content;
  cursor: text;
  background: white;
  position: absolute;
  margin-right: 55px;
  box-shadow: rgba(15, 15, 15, 0.3) 0px 2px 12px 4px;
  z-index: 1061;
}
.stt-content{
  padding: 6px 7px;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  width: fit-content;
  cursor:pointer;
}
.stt-content:hover {
    background-color: #4089FF !important;
    color: white !important;
}
.lisn-stt-container{
    padding: 0rem 1.5rem 0rem 0rem;
    font-size: 14px;
}
.lisn-stt-container>ul{
  padding: 0;
}
</style>
