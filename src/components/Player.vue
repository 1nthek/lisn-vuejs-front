<template>
  <div class="player-container" >
    <div class="player">
      <div class="btn-container">
        <template v-if="this.$store.state.isRecordable">
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
        <template v-if="!this.$store.state.isRecordable">
          <div class="btn-play">
            <template v-if="this.$store.state.isPlaying">
              <div class="cont-mic" style="background:#606060" @click.prevent="pauseSound()">
                <i class="fas fa-pause" style="font-size: 17px;padding-top: 1px;"></i>        
              </div>
            </template>
            <template v-else>
              <div class="cont-mic" style="background:#606060" @click.prevent="playSound()">
                <i class="fas fa-play" style="font-size: 17px;padding-left: 3px;padding-top: 1px;"></i>
              </div>
            </template>
          </div>
        </template>
      </div>
      <div class="time">
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
import axios from 'axios'
import Swal from 'sweetalert2';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();
var recorder;
var localstream;

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'ko-KR';
recognition.maxAlternatives = 1;

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
      user_id: -1,
      audio_id:-1,

      isPlaying: false,
      isRecording: false,
      timerId: null,
      chunks: null,

      audio_start_time: null,
      audio_timestamp: [],
      tmp_id: 0,
      current_start_tmp_id: null,
      is_first_word: null,

      swal_saveingRec: null,
    }
  },
  watch: {
    isRecording: function (newVal) {
      this.$emit('isRecording', newVal);
    }
  },
  created() {
    let self = this;
    this.$store.commit('setUserId', 'glisn_user_id');
    this.user_id = this.$store.state.user_id;
    window.addEventListener('keydown', function (e) {
      if (e.keyCode == 32) {
        if(self.$store.state.isPlaying){
          self.$store.state.isPlaying = false;
          self.$store.state.audio.pause();
          self.$store.state.timeOffset = self.$store.state.audio.currentTime;
          self.$store.commit('clearInter');
        } else{
          var audioId = JSON.parse(JSON.stringify(self.$store.state.sttText))[0].audioId;
          axios.get(self.$store.state.domain + "/record/audio?audio_id=" + audioId)
            .then((res) => {
              self.$store.state.audio.src = res.data.data_url;
              // self.$store.commit('setCurrentTime', {begin:0});
              self.$store.commit('playSound');
              self.$store.state.audio.play();
            })
            .catch((ex) => {
            })
        }
      }
  });
  },
  methods: {
    // saveRec(){
    //   if(this.isRecording){
    //     recognition.stop();
    //     recorder.stop();
    //     this.isRecording = false;
    //   }
      
    //   this.$store.state.isPlaying = false;
    //   this.$store.commit('clearInter');
    //   this.$store.state.audio.pause();
    // },
    update_sentence_text(event_object_list) {
        // var sentence_tag = document.getElementById(tmp_sentence_id);
        var transcript = "";
        for (var i = event_object_list.resultIndex; i < event_object_list.results.length; ++i) {
          transcript += event_object_list.results[i][0].transcript;
        }
        
        this.$emit('scrollSTT')
        this.$set(this.$store.state.sttText, this.tmp_id, {content: transcript, id: this.tmp_id, begin: this.audio_timestamp[this.tmp_id]});
    },
    // post_record_sentence_info(tmp_sentence_id, formData) {
    //   axios.post(this.$store.state.domain + '/record/sentence', formData)
    //     .then((res) => {
    //       var sentence_id = JSON.parse(res)['sentence_id'];
    //         var sentence_tag = document.getElementById(tmp_sentence_id);
    //         // set real sentence id
    //         sentence_tag.id = sentence_id;
    //         sentence_tag.onclick = function(event) {
    //             get_audio_and_play(event.target.id);
    //         };
    //     })
    //     .catch((ex) => {
    //     });
    // },
    sendRecording() {
      var blob = new Blob(this.chunks, {'type': 'audio/webm;'});
        // clear chunks
        this.chunks = [];
        
        if(this.audio_timestamp.length == 0){
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1600,
            type: 'warning',
            title: '인식된 단어가 없습니다.'
          })
          return;
        }

        var self = this;
        var formData = new FormData();
        formData.append('audio_data', blob, 'filename');
        formData.append('note_id', this.$store.state.note_id);

        axios.post(this.$store.state.domain + '/note/audio', formData)
          .then((res) => {
            self.audio_id = res.data.audio_id;
            self.audio_timestamp = [];

            this.$store.state.sttText.forEach(element => {
                var formData2 = new FormData();
                formData2.append('index', element.id);
                formData2.append('audio_id', self.audio_id);
                formData2.append('started_at', element.begin);
                formData2.append('ended_at', 99999); 
                formData2.append('content', element.content);
                
                axios.post(this.$store.state.domain + '/note/sentence', formData2)
                  .then((res) => {
                    let self = this;
                    axios.get( this.$store.state.domain + '/note?note_id=' + this.$store.state.note_id)
                      .then((res) => {
                        self.$store.state.sttText = [];
                        self.title = res.data.title;
                        res.data.audios.forEach(element => {
                          var audio_id = element.audio_id;
                          var sentences = element.sentences;
                          var idx=0;
                          sentences.forEach(ele => {
                            self.$set(self.$store.state.sttText, idx++, {content: ele.content, id: idx, begin: ele.started_at, audioId: audio_id});
                          })
                        });
                        
                      })
                      .then(() => {
                        this.$store.state.hour = '0';
                        this.$store.state.minute = '00';
                        this.$store.state.second = '00';
                        this.$store.state.timeOffset = 0;

                        setTimeout(() => {
                          if(self.swal_saveingRec)
                            self.swal_saveingRec.close();
                          
                          Swal.fire({
                            toast: true,
                            position: 'center',
                            showConfirmButton: false,
                            timer: 1600,
                            type: 'warning',
                            title: '녹음 파일 저장 완료'
                          })
                        }, 500);
                      })
                      .catch((ex) => {
                        Toast_save_fail.fire();
                      });
                  })
                  .catch((ex) => {
                    Toast_save_fail.fire();
                  })
              })
          })
          .catch((ex) => {
            Swal.fire({
              toast: true,
              position: 'center',
              showConfirmButton: false,
              timer: 3000,
              type: 'error',
              title: '녹음파일 저장 실패.'
            })
          })
    },
    startRecording(stream) {
        this.$emit('openSTT');
        this.isRecording = true;
        var self = this;
       
        recorder = new MediaRecorder(stream);
        // localstream = recorder.stream;
        this.chunks = [];
        this.is_first_word = true;
        this.current_start_tmp_id = this.tmp_id;

        recorder.start();
        recognition.start();

        // recorder setting
        recorder.onstart = function() {
            self.$store.commit('startCountingTimer');
            self.audio_start_time = Date.now();
        };

        recorder.ondataavailable = function(e) {
              self.chunks.push(e.data);
        }
        recorder.onstop = function(e) {
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
          self.$store.commit('clearInter');
          self.sendRecording();
        };

        recognition.onend = function() {
            if(self.isRecording == true) {
                recognition.start();
            }
        }

        // recognition setting
        var self = this;
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
                self.is_first_word = true;
                self.tmp_id ++;
            }
            else if(self.is_first_word == true) {
                var word_start_time = Date.now() - self.audio_start_time;
                
                if(word_start_time > 2300)
                    word_start_time -= 2300;
                else
                    word_start_time = 0;
                                
                self.audio_timestamp.push(word_start_time);
                
                
                self.update_sentence_text(event_object_list);
                self.is_first_word = false;
            }
            else {
                self.update_sentence_text(event_object_list);
            }
        };
        
    },
    recBtnPressed(){
      if(this.isRecording){
        // Swal.fire({
        //   toast: true,
        //   position: 'top',
        //   showConfirmButton: false,
        //   timer: 1000,
        //   type: 'success',
        //   title: '녹음 종료'
        // })
        
        this.isRecording = false;
        this.$store.state.isRecordable = false;

        recognition.stop();
        recorder.stop();

        if (!localstream) return;

        localstream.getTracks().forEach((track) => {
          track.stop();
        });
        
        // localstream = null;
        // localstream.getTracks().forEach((track) => {
        //   track.stop();
        // });
      }else{
        let self = this;
        // navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        //   .then((stream) => {
        //     localstream = stream;
        //     self.startRecording(stream);
        //   })
        //   .catch((ex) => {
        //     Swal.fire({
        //       toast: true,
        //       position: 'center',
        //       showConfirmButton: false,
        //       timer: 3000,
        //       type: 'error',
        //       title: '마이크가 연결되어 있지 않습니다.'
        //     })
        // });

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
    },  
    playSound() {
      var audioId = JSON.parse(JSON.stringify(this.$store.state.sttText))[0].audioId;
      axios.get(this.$store.state.domain + "/record/audio?audio_id=" + audioId)
        .then((res) => {
          this.$store.state.audio.src = res.data.data_url;
          // this.$store.commit('setCurrentTime', {begin:0});
          this.$store.commit('playSound');
          this.$store.state.audio.play();

        })
        .catch((ex) => {
        })
      
      // this.$store.commit('playSound');

      // this.$store.state.audio.currentTime = this.$store.state.timeOffset;
      // this.$store.state.audio.play();
      // this.timerId = setInterval(() => {
      //   this.printTime();
		  // }, 1000)
    },
    pauseSound() {
      this.$store.state.isPlaying = false;
      this.$store.state.audio.pause();
      this.$store.state.timeOffset = this.$store.state.audio.currentTime;
      this.$store.commit('clearInter');
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
    if(this.isRecording){
      recognition.stop();
      recorder.stop();
      this.isRecording = false;
    }
    // if(localstream!=undefined){
    //   localstream.getTracks().forEach((track) => {
    //     track.stop();
    //   });
    // }

    this.$store.state.isPlaying = false;
    this.$store.commit('clearInter');
    this.$store.state.audio.pause();
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
