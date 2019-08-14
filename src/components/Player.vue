<template>
  <div class="player-container">
    <div class="player">
      <div class="btn-container">
        <div class="btn-record">
          <template v-if="isRec">
              <i class="far fa-stop-circle" @click="recBtnPressed()"></i>
          </template>
          <template v-else>
            <i class="far fa-dot-circle" @click="recBtnPressed()"></i>
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
import axios from 'axios'

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'ko-KR';
recognition.maxAlternatives = 1;
export default {
  data() {
    return {
      user_id: -1,
      
      isRec: false,
      isPlay: false,
      timerId: null,
      is_record: false,
      recorder: null,
      chunks: null,

      audio_start_time: null,
      audio_timestamp: [],
      tmp_id: 0,
      current_start_tmp_id: null,
      is_first_word: null,
    }
  },
  created() {
    this.$store.commit('setUserId', 'glisn_user_id');
    this.user_id = this.$store.state.user_id;
  },
  methods: {
    setCookie(name, value, exp) {
        var date = new Date();
        date.setTime(date.getTime() + exp*24*60*60*1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    },
    getCookie(name) {
        var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value? value[2] : null;
    },
    update_sentence_text(event_object_list) {
        // var sentence_tag = document.getElementById(tmp_sentence_id);
        var transcript = "";
        for (var i = event_object_list.resultIndex; i < event_object_list.results.length; ++i) {
          transcript += event_object_list.results[i][0].transcript;
        }        
        this.$set(this.$store.state.sttText, this.tmp_id, {content: transcript, id: this.tmp_id, begin: this.audio_timestamp[this.tmp_id]});
        // var array = JSON.parse(JSON.stringify(this.$store.state.sttText));
        // console.log('array', array);
        
        // array[this.tmp_id].content = transcript;

        // this.$store.state.sttText = array;
      //  this.$store.state.sttText[tmp_sentence_id].content = transcript;
        // console.log(transcript);
        
        // sentence_tag.textContent = transcript;
        // sentence_tag.style.color = '#666666';
    },
    post_record_sentence_info(tmp_sentence_id, formData) {
      axios.post('http://localhost:8000/record/sentence', formData)
        .then((res) => {
          var sentence_id = JSON.parse(res)['sentence_id'];
            var sentence_tag = document.getElementById(tmp_sentence_id);
            // set real sentence id
            sentence_tag.id = sentence_id;
            sentence_tag.onclick = function(event) {
                get_audio_and_play(event.target.id);
            };
        })
        .catch((ex) => { 
          console.log('실패'); 
        });
    },
    sendRecording() {
        var blob = new Blob(this.chunks, {'type': 'audio/webm;'});
        // clear chunks
        this.chunks = [];

        if(this.audio_timestamp.length == 0){
            return;
        }

        var self = this;
        var note_id = this.$store.state.note_id;
        console.log('note_id!!!!!!', this.$store.state.note_id);
        console.log('user_id!!!!!!', this.$store.state.user_id);
        
        var formData = new FormData();
        formData.append('audio_data', blob, 'filename');
        formData.append('note_id', note_id);

        axios.post('http://localhost:8000/record/audio', formData)
          .then((res) => {
            // var audio_id = JSON.parse(res)['audio_id'];
            // self.audio_timestamp.push(-1);
            // for(var i=1; i<self.audio_timestamp.length; i++){
            //     if(self.audio_timestamp[i] == self.audio_timestamp[i-1]){
            //         self.audio_timestamp[i] = self.audio_timestamp[i-1]+1;
            //     }
            //     var current_tmp_id = self.current_start_tmp_id + i - 1
            //     var started_at = self.audio_timestamp[i-1];
            //     var ended_at = self.audio_timestamp[i];
            //     var sentence_tag = document.getElementById('tmp_' + current_tmp_id);
            //     var content = sentence_tag.textContent;
                
            //     var formData = new FormData();
            //     formData.append('index', (i-1));
            //     formData.append('audio_id', audio_id);
            //     formData.append('started_at', started_at);
            //     formData.append('ended_at', ended_at);
            //     formData.append('content', content);
            //     post_record_sentence_info('tmp_' + current_tmp_id, formData);
            // }

            self.audio_timestamp = [];
        })
        .catch((ex) => { 
          console.log('실패'); 
        });
    },
    startRecording(stream) {
        var self = this;
       
        this.recorder = new MediaRecorder(stream);
        this.chunks = [];
        this.is_first_word = true;
        this.current_start_tmp_id = this.tmp_id;

        // recorder setting
        this.recorder.onstart = function() {
            console.log('this.recorder.onstart');
            self.audio_start_time = Date.now();
        };

        this.recorder.ondataavailable = function(e) {
            console.log('this.recorder.ondataavailable');
            self.chunks.push(e.data);
        };

        this.recorder.onstop = function(e) {
            console.log('this.recorder.onstop');
        };

        recognition.onend = function() {
            if(self.is_record == true) {
                recognition.start();
                console.log('Recognition restart!');
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
                console.log('isFinal');

                // var sentence_tag = document.getElementById('tmp_' + this.tmp_id );
                // sentence_tag.textContent = transcript;
                // sentence_tag.style.color = '#000000';
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
                console.log('is_not_first_word');
              
                self.update_sentence_text(event_object_list);
            }
        };
        this.recorder.start();
        recognition.start();
    },
    recBtnPressed(){
      if(this.isRec){
        this.isRec = !this.isRec;
        this.sendRecording();

        console.log('End');
      }else{
        this.isRec = !this.isRec;
        console.log('Start');
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
          .then(this.startRecording)
          .catch((ex) => {
            console.log('마이크가 연결되어 있지 않음'); 
        });
      }
    },  
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
