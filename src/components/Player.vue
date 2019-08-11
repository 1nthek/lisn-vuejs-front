<template>
  <div class="player-container">
    <div class="player">
      <div class="btn-container">
        <div class="btn-record">
          <template v-if="isRec">
              <i class="far fa-stop-circle" @click="isRec = !isRec"></i>
          </template>
          <template v-else>
            <i class="far fa-dot-circle" @click="isRec = !isRec"></i>
          </template>
        </div>
        <div class="btn-play">
          <template v-if="isPlay">
            <i class="far fa-pause-circle" @click="isPlay = !isPlay" @click.prevent="pauseSound()"></i>        
          </template>
          <template v-else>
            <i class="far fa-play-circle" @click="isPlay = !isPlay" @click.prevent="playSound()"></i>
          </template>
        </div>
      </div>
      <div class="time oswald">
        {{this.$store.state.hour}}:{{this.$store.state.minute}}:{{this.$store.state.second}}
      </div>
      <div class="soundVol">
        <div id="vol0" class="vol"></div> 
        <div id="vol1" class="vol"></div>
        <div id="vol2" class="vol"></div>
        <div id="vol3" class="vol"></div>
        <div id="vol4" class="vol"></div>
        <div id="vol5" class="vol"></div>
        <div id="vol6" class="vol"></div>
        <div id="vol7" class="vol"></div>
        <div id="vol8" class="vol"></div>
        <div id="vol9" class="vol"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRec: false,
      isPlay: false,
      timerId: null,
    }
  },
  methods: {
    playSound() {
      this.$store.state.audio.currentTime = this.$store.state.timeOffset;
      this.$store.state.audio.play();
      this.timerId = setInterval(() => {
        this.printTime();
		  }, 1000)
    },
    pauseSound() {
      console.log('pause');
      this.$store.state.audio.pause();
      console.log(this.$store.state.audio.currentTime);
      this.$store.state.timeOffset = this.$store.state.audio.currentTime;
      clearInterval(this.timerId);
    },
    printTime() {
      var curTime = this.$store.state.audio.currentTime;

      this.$store.state.hour = Math.floor(curTime / 3600);
      this.$store.state.hour = (this.$store.state.hour >= 10) ? this.$store.state.hour : "0" + this.$store.state.hour;
      this.$store.state.minute = Math.floor((curTime / 60) % 60);
      this.$store.state.minute = (this.$store.state.minute >= 10) ? this.$store.state.minute : "0" + this.$store.state.minute;
      this.$store.state.second = Math.floor(curTime % 60);
      this.$store.state.second = (this.$store.state.second >= 10) ? this.$store.state.second : "0" + this.$store.state.second;
    },
  },
  beforeDestroy() {
    clearInterval(this.timerId)
    this.$store.state.audio.pause();
  },
}
</script>
<style scoped>
.btn-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.soundVol{
  display: flex;
}
.vol{
  background: lightgray;
  width: 2px;
  height: 16px;
  margin-left: 2px;
}
.player-container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;
}
.player{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 100px;
  min-width: 20rem;
  height: 3rem;
  font-size: 24px;
  padding: 0 1.4rem;
}
.btn-record{
  display: flex;
  justify-content: center;
  color: red;
  width: 2rem;
  cursor: pointer;
  /* transition: all .3s ease 0s; */
}
.btn-play{
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 2rem;
}

</style>
