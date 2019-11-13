<template>
  <div class="player-container" >
    <div class="player">
      <div class="btn-container">
        <template v-if="isRecordable">
          <div class="btn-record">
            <template v-if="isRecording">
              <div class="cont-mic blinkRed" @click="recBtnPressed()">
                <i class="fas fa-square" style="font-size: 14px;"></i>
              </div>
            </template>
            <template v-else>
              <div class="cont-mic" @click="recBtnPressed()">
                <i class="fas fa-microphone" style="font-size:18px"></i>
              </div>
              <!-- <i class="far fa-dot-circle" @click="recBtnPressed()"></i> -->
            </template>
          </div>
        </template>
        <template v-if="!isRecordable">
          <div class="btn-play">
            <template v-if="isPlaying">
              <div class="cont-mic" style="background:#606060" @click.prevent="pauseSoundClicked()">
                <i class="fas fa-pause" style="font-size: 17px;padding-top: 1px;"></i>        
              </div>
            </template>
            <template v-else>
              <div class="cont-mic" style="background:#606060" @click.prevent="playSoundClicked()">
                <i class="fas fa-play" style="font-size: 17px;padding-left: 3px;padding-top: 1px;"></i>
              </div>
            </template>
          </div>
        </template>
      </div>
      <div class="time">
        {{hour}}:{{minute}}:{{second}}
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
import axios from 'axios'
import Swal from 'sweetalert2';
import { mapState, mapActions, mapMutations } from 'vuex'
import VueAmplitude from 'vue-amplitude'
import Vue from 'vue'

Vue.use(VueAmplitude, { apiKey: 'f1f895bc97a1dfc905ea1bbc1f4af3f7' });

try{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var recognition = new SpeechRecognition();
  var recorder;
  var localstream;
  
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'ko-KR';
  recognition.maxAlternatives = 1;
}
catch(ex){

}

const alert_upload_rec_fail = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    type: 'error',
    title: '녹음파일 저장 실패.'
})
const alert_post_stt_fail = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    type: 'error',
    title: 'stt 저장 실패.'
})
const alert_get_stt_fail = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    type: 'error',
    title: 'stt 불러오기 실패.'
}) 

export default {
  data() {
    return {
      audio_id:-1,

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
      'isRecording',
      'isRecordable',
      'sttText',
      'audio',
      'rec_length',
      'user_id',
    ]),
  },
  methods: {
    ...mapMutations([
      'clear_player_data',
      'clear_interval_stt',
      'clear_playTimer',
      'clear_recordTimer',
      'pauseSound',
      'set_isRecording',
      'set_isRecordable',
      'set_isPlaying',
      'playSound',
    ]),
    update_sentence_text(event_object_list) {
        var transcript = "";
        for (var i = event_object_list.resultIndex; i < event_object_list.results.length; ++i) {
          transcript += event_object_list.results[i][0].transcript;
        }
        this.$emit('scrollSTT')
        if(this.audio_timestamp.length!=0){
          this.$set(this.sttText, this.tmp_id, {content: transcript, id: this.tmp_id, begin: this.audio_timestamp[this.tmp_id], end: Date.now() - this.audio_start_time});
        }
    },
    async sendRecording() {
      let self = this;
      var blob = new Blob(this.chunks, {'type': 'audio/webm;'});
      this.chunks = [];

      if(this.audio_timestamp.length == 0){
        const saveRecord = await Swal.fire({
          title: '인식된 단어가 없습니다',
          text: '녹음 파일을 저장할까요?',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success btn-fill',
          cancelButtonClass: 'btn btn-danger btn-fill',
          confirmButtonText: '저장',
          cancelButtonText: '안함',
          allowOutsideClick: false,
          showCloseButton: true,
          buttonsStyling: false
        }).then(result => {
            return result.value;
        });

        if(!saveRecord){
          self.$store.commit('initRecording');
          return;
        }
      }
      
      var formData = new FormData();
      formData.append('audio_data', blob, 'filename');
      formData.append('note_id', self.note_id);
      formData.append('length ', self.rec_length);
      
      self.audio_id =  await axios.post(this.domain + '/note/audio', formData)
        .then(res => {
          return res.data.audio_id;
        })
        .catch(() => {
          self.swal_saveingRec.close();
          self.swal_saveingRec = null;
          alert_upload_rec_fail.fire();
        })

      this.sttText.forEach(async (element) => {
        var formData2 = new FormData();
        formData2.append('index', element.id);
        formData2.append('audio_id', self.audio_id);
        formData2.append('started_at', element.begin);
        formData2.append('ended_at', element.end); 
        formData2.append('content', element.content);
        
        await axios.post(this.domain + '/note/sentence', formData2)
          .catch(() => {
            self.swal_saveingRec.close();
            self.swal_saveingRec = null;
            alert_post_stt_fail.fire()
          })
      })
      self.clear_player_data();
      setTimeout(async () => {
        await axios.get( this.domain + '/note?note_id=' + this.note_id)
          .then(res => {
            res.data.audios.forEach(element => {
              var audio_id = element.audio_id;
              var sentences = element.sentences;
              var idx=0;
              sentences.forEach(ele => {
                self.$set(self.sttText, idx++, {content: ele.content, id: idx, begin: ele.started_at, end: ele.ended_at, audioId: audio_id});
              })
            });
          })
          .catch(() => {
            self.swal_saveingRec.close();
            self.swal_saveingRec = null;
            alert_get_stt_fail.fire();
          });
        
        if(self.swal_saveingRec){
          self.swal_saveingRec.close();
        }
      },300)
      
    },
    startRecording(stream) {
        this.$emit('openSTT');
        this.set_isRecording(true);
        var self = this;
       
        recorder = new MediaRecorder(stream);
        this.chunks = [];
        this.is_first_word = true;
        this.current_start_tmp_id = this.tmp_id;

        recorder.start();
        recognition.start();

        recorder.onstart = () => {
          self.$store.commit('recordingTimer');
          self.audio_start_time = Date.now();
        };

        recorder.ondataavailable = (e) => {
          self.chunks.push(e.data);
        }
        recorder.onstop = () => {
          let timerInterval;
          self.swal_saveingRec = Swal.fire({
            showCloseButton: true,
            title: '녹음 파일 저장중',
            html: '<strong></strong>',
            allowOutsideClick: false,
            onBeforeOpen: () => {
              Swal.showLoading()
            },
          })
          // self.clear_player_data();
          // self.clear_interval_stt();
          self.clear_playTimer();
          self.sendRecording();
        };

        recognition.onend = function() {
          if(self.isRecording == true) {
              recognition.start();
          }
        }

        recognition.onresult = function(event_object_list) {
            var event_last_idx = event_object_list.results.length - 1;
            var transcript = event_object_list.results[event_last_idx][0].transcript;
            
            if(transcript == null) {
              return;
            }
            
            if(event_object_list.results[event_last_idx].isFinal == true) {
                if(self.is_first_word==true){
                  var word_start_time = Date.now() - self.audio_start_time;
                
                  if(word_start_time > 2300)
                      word_start_time -= 2300;
                  else
                      word_start_time = 0;
                                  
                  self.audio_timestamp.push(word_start_time);
                  self.update_sentence_text(event_object_list);
                }
                if(self.audio_timestamp.length==0)
                  return;

                self.is_first_word = true;
                self.tmp_id ++;
            }
            else{
              if(self.is_first_word == true){
                self.is_first_word = false;
                var word_start_time = Date.now() - self.audio_start_time;
                
                if(word_start_time > 2300)
                    word_start_time -= 2300;
                else
                    word_start_time = 0;
                                
                self.audio_timestamp.push(word_start_time);
              }
              self.update_sentence_text(event_object_list);
            }
        };
        
    },
    recBtnPressed(){
      if(this.isRecording){
        this.clear_recordTimer();
        this.set_isRecording(false);
        this.set_isRecordable(false);

        recognition.stop();
        recorder.stop();

        if (!localstream) return;

        localstream.getTracks().forEach((track) => {
          track.stop();
        });
      }
      else{
        let self = this;
        navigator.getUserMedia({ audio: true, video: false },
            function(stream) {
              localstream = stream;
              self.startRecording(stream);
            },
            function(ex) {
              Swal.fire({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 3000,
                type: 'error',
                title: '마이크가 연결되어 있지 않습니다.'
              })
            }
        );
      }
      this.$amplitude.setUserId(this.user_id);
      this.$amplitude.logEvent('recBtnPressed');
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
    if(this.isRecording){
      recognition.stop();
      recorder.stop();
      this.set_isRecording(false);
    }
    this.set_isPlaying(false);
    this.clear_playTimer();
    this.clear_recordTimer();
    this.clear_interval_stt();
    this.audio.pause();
  },
}
</script>
<style>
.blinkRed {
    animation: blinkRed 1s ease infinite;
    animation-direction: alternate;
} 
@keyframes blinkRed {
    from { background-color: #f03;}
    to {background-color: white;} 
}

.cont-mic{
  color:white;display: block;
  padding: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f03;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 2px 4px 0 rgba(0,0,0,.2); */
  transition: all 300ms ease 0s;
}
.cont-mic:hover{
  background-color: rgb(224, 0, 45);
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
  min-width: 20rem;
  height: 3rem;
  font-size: 24px;
  padding: 0 1.4rem;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2rem;
  padding-left: 6px;
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
