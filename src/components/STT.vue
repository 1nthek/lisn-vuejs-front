<template>
<div class="stt-container stt-hidden" style="overflow: hidden;" ref="container">
  <div style="display: flex;margin-left: 8px;;font-size: 18px;">
    <div class="bar-icon" @click="minimizeSTT"><i class="fas fa-bars"></i></div>
  </div>
  <vuescroll ref="vs">
        <div class="lisn-stt-container">
          <ul id="v-for-object" class="demo">
            <template v-for="(item, index) in this.$store.state.sttText">
              <div :key="index" style="padding: 0.5rem 0; margin:5px" >
                  <div style="display:flex">
                    <div style="font-size: 26px;" class="stt-icon">
                      <i class="fas fa-user-circle"></i>
                    </div>
                    <div style="fisplay:flex;flex-direction: column;">
                      <div style="margin: 8px 0 2px 10px;">{{ parseInt(parseInt(item.begin/1000)/60)%60 }}:{{ parseInt(item.begin/1000)%60 &lt; 10 ? '0' : '' }}{{ parseInt(item.begin/1000)%60 }}</div>
                      <span class="stt-content" style="padding: 0 6px;border-radius: 20px;" @click="getAudioAndPlay(item)">
                        {{item.content}}
                      </span>
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
import axios from 'axios';

export default {
  data(){
    return{
      audioId: -1,
      isMinimized: true,
    }
  },
  watch:{
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
  },
  methods: {
    minimizeSTT(){
      this.isMinimized = !this.isMinimized;

      let docClasses = this.$refs['container'].classList
      
      if (this.isMinimized) {
        docClasses.add('stt-hidden')
        docClasses.remove('stt-show')
        this.$refs['container'].parentNode.classList.add('hide')
      } else {
        docClasses.add('stt-show')
        this.$refs['container'].parentNode.classList.add('show')
        docClasses.remove('stt-hidden')
      }
      if (this.hovered) {
        docClasses.add('g-sidenav-show')
      }
    },
    scrollSTT(){
      this.$refs['vs'].scrollTo(
        { y: this.$refs['vs'].$el.childNodes[0].childNodes[0].scrollHeight },
        1000
      );
    },
    getAudioAndPlay(item) {
      this.audioId = JSON.parse(JSON.stringify(item.audioId))
      axios.get(this.$store.state.domain + "/record/audio?audio_id=" + this.audioId)
        .then((res) => {
          this.$store.state.audio.src = res.data.data_url;
          this.$store.commit('setCurrentTime', item);
          this.$store.commit('playSound');
          this.$store.state.audio.play();
        })
        .catch((ex) => {

        })
    },
  }
}
</script>

<style>
.bar-icon:hover{
  cursor: pointer;
}
.stt-hidden{
  min-width: 90px;
  max-width: 90px;
}
.stt-hidden .stt-content, .stt-hidden .stt-icon{
  display: none !important;
}
.show>.stt-container{
  flex: 1 !important;
}
.show>.note-container{
  flex: 1 !important;
}

/* .stt-show{

} */
/* .stt-show + .note-container{
  flex: 1 !important;
} */
span{
    font-weight: 400;
    width: fit-content;
}
.stt-content:hover {
    background-color: bisque;
}
.lisn-stt-container{
    padding: 0rem 1.5rem 0rem 0rem;
    font-size: 14px;
}
.lisn-stt-container>ul{
  padding: 0;
}
</style>
