<template>
  <div class="player-container" >
    <div class="player">
      <div class="btn-container">
        <template v-if="isRecordable">
          <div class="btn-record">
            <div class="cont-mic-read" @click="recBtnPressed()">
              <i class="fas fa-microphone" style="font-size:18px"></i>
            </div>
          </div>
        </template>
        <template v-if="!isRecordable">
          <div class="btn-play">
            <template v-if="isPlaying">
              <div class="cont-mic-read" style="background:#606060" @click.prevent="pauseSoundClicked()">
                <i class="fas fa-pause" style="font-size: 17px;padding-top: 1px;"></i>        
              </div>
            </template>
            <template v-else>
              <div class="cont-mic-read" style="background:#606060" @click.prevent="playSoundClicked()">
                <i class="fas fa-play" style="font-size: 17px;padding-left: 3px;padding-top: 1px;"></i>
              </div>
            </template>
          </div>
        </template>
      </div>
      <div class="time" style="margin-right: 20px;">
        {{hour}}:{{minute}}:{{second}}
      </div>
      <div class="soundVol">
        <!-- <div id="vol0" class="vol"></div> 
        <div id="vol1" class="vol"></div>
        <div id="vol2" class="vol"></div>
        <div id="vol3" class="vol"></div>
        <div id="vol4" class="vol"></div>
        <div id="vol5" class="vol"></div>
        <div id="vol6" class="vol"></div>
        <div id="vol7" class="vol"></div>
        <div id="vol8" class="vol"></div>
        <div id="vol9" class="vol"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapState, mapActions, mapMutations } from 'vuex'

const Toast_save_fail = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    type: 'error',
    title: '녹음파일 저장 실패.'
}) 

export default {
  data() {
    return {
      audio_id:-1,

      isRecording: false,
      timerId: null,
      chunks: null,

      audio_start_time: null,
      audio_timestamp: [],
      tmp_id: 0,
      current_start_tmp_id: null,
      is_first_word: null,

      swal_saveingRec: null,
      tmp_idx: 0,
    }
  },
  computed: {
    ...mapState([
      'note_id',
      'domain',
      'hour',
      'minute',
      'second',
      'isPlaying',
      'isRecordable',
      'sttText',
      'audio',
    ]),
  },
  methods: {
    ...mapMutations([
      'clear_player_data',
      'clear_interval_stt',
      'clear_playTimer',
      'pauseSound',
      'set_isRecording',
      'set_isRecordable',
      'set_isPlaying',
      'playSound',
    ]),
    recBtnPressed(){
        Swal.fire({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        type: 'error',
        title: '녹음은 수정 모드에서만 가능합니다.'
        })
    },
    playSoundClicked() {
      this.playSound();
    },
    pauseSoundClicked() {
      this.pauseSound();
    },
    printTime() {
      var curTime = this.audio.currentTime;

      this.hour = Math.floor(curTime / 3600);
      this.hour = (this.hour >= 10) ? this.hour : "0" + this.hour;
      this.minute = Math.floor((curTime / 60) % 60);
      this.minute = (this.minute >= 10) ? this.minute : "0" + this.minute;
      this.second = Math.floor(curTime % 60);
      this.second = (this.second >= 10) ? this.second : "0" + this.second;
    },
  },
  beforeDestroy() {
    this.set_isPlaying(false);
    this.clear_playTimer();
    this.clear_interval_stt();
    this.audio.pause();
  },
}
</script>
<style>

.cont-mic-read{
  color:white;
  display: block;
  padding: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease 0s;
  cursor: default;
}
.cont-mic-read:hover{
  background-color: #bdbdbd;
}
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
  position: absolute;
  right: 50%;
  left: 50%;
}
.player{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  /* border: 1px solid #dbdbdb; */
  /* border-radius: 100px; */
  min-width: 16rem;
  height: 3rem;
  font-size: 24px;
  padding: 0 1.4rem;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2rem;
  padding: 0 8px;
}
.btn-record{
  display: flex;
  justify-content: center;
  color: red;
  /* width: 2rem; */
  cursor: pointer;
  /* transition: all .3s ease 0s; */
}
.btn-play{
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* width: 2rem; */
}

</style>
