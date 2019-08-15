<template>
    <div class="lisn-stt">
        <div class="lisn-stt-container">
        <ul id="v-for-object" class="demo">
          <template v-for="(item, index) in this.$store.state.sttText">
            <div :key="index" style="padding: 0.5rem 0; margin:5px" >
              <span style="padding: 0 6px;border-radius: 20px;" @click="getAudioAndPlay(item)">
                {{item.content}}
              </span>
            </div>
          </template>
        </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      audioId: -1,
    }
  },
  methods: {
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
