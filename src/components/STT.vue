<template>
  <vuescroll ref="vs">
    <div class="lisn-stt">
        <div class="lisn-stt-container">
          <ul id="v-for-object" class="demo">
            <template v-for="(item, index) in this.$store.state.sttText">
              <div :key="index" style="padding: 0.5rem 0; margin:5px" >
                  <div style="display:flex">
                    <div style="font-size: 26px;">
                      <i class="fas fa-user-circle"></i>
                    </div>
                    <div style="fisplay:flex;flex-direction: column;">
                      <div style="margin: 8px 0 2px 10px;">{{ parseInt(parseInt(item.begin/1000)/60)%60 }}:{{ parseInt(item.begin/1000)%60 &lt; 10 ? '0' : '' }}{{ parseInt(item.begin/1000)%60 }}</div>
                      <span style="padding: 0 6px;border-radius: 20px;" @click="getAudioAndPlay(item)">
                        {{item.content}}
                      </span>
                    </div>
                  </div>
              </div>
            </template>
          </ul>
        </div>
    </div>
  </vuescroll>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      audioId: -1,
    }
  },
  watch:{
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
  },
  methods: {
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
          this.$store.state.audio.play();
        })
        .catch((ex) => {

        })
    },
  }
}
</script>

<style scoped>
span{
    font-weight: 400;
    width: fit-content;
}
span:hover {
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
