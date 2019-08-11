<template>
    <div class="lisn-record-bar">
            <!-- <input type="file" id="thefile" accept="audio/*" /> -->
            <canvas id="canvas"></canvas>
            <div class="lisn-record-bar-container">
                <div class="circlr-margin">
                    <router-link to="/write" style="cursor:default">
                        <div class="circlr">
                            <i class="fas fa-microphone fa-2x" ></i>
                        </div>
                    </router-link>
                </div>
                <dic class="circlr-margin">
                    <div class="circlr">
                        <div class="filebox">
                            <label for="thefile"><i class="fas fa-file-upload fa-2x"></i></label>
                            <input type="file" id="thefile">
                        </div>
                    </div>
                </dic>
            </div>
            <audio id="audio" controls></audio>
        <!-- </transition> -->
    </div>
</template>

<script>
window.onload = function () {
  var file = document.getElementById('thefile')
  var audio = document.getElementById('audio')
  file.onchange = function () {
    var files = this.files
    audio.src = URL.createObjectURL(files[0])
    audio.load()
    audio.play()
    var context = new AudioContext()
    var src = context.createMediaElementSource(audio)
    var analyser = context.createAnalyser()

    var canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var ctx = canvas.getContext('2d')

    src.connect(analyser)
    analyser.connect(context.destination)

    analyser.fftSize = 2048

    var bufferLength = analyser.frequencyBinCount
    console.log(bufferLength)

    var dataArray = new Uint8Array(bufferLength)

    var WIDTH = canvas.width
    var HEIGHT = canvas.height

    var barWidth = (WIDTH / bufferLength) * 2.5
    var barHeight
    var x = 0

    function renderFrame () {
      requestAnimationFrame(renderFrame)

      x = 0

      analyser.getByteFrequencyData(dataArray)

      ctx.fillStyle = '#eee9f1'
      ctx.fillRect(0, 0, WIDTH, HEIGHT)

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 3

        var r = (barHeight + (10 * (i / bufferLength))) * 0.3
        var g = 20 * (i / bufferLength)
        var b = 180

        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }
    }

    audio.play()
    renderFrame()
  }
}
export default {
}
</script>

<style scoped>
#thefile {
  /* position: fixed;
  top: 10px;
  left: 10px; */
  z-index: 100;
}

#canvas {
  width: 100%;
  height: 5rem;
}

audio {
    position: absolute;
    margin-left: 70%;
    margin-top: 8px;
  /* width: calc(100% - 20px); */
}
.fade-enter-active {
  /* transition: all 3s ease; */
  transition-duration: 2s;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10rem);
  opacity: 0;
}
.circlr-margin{
    margin: 1rem;
}
.filebox{
    cursor:default;
}
.filebox label {
    display: flex;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 0rem;
    cursor: pointer;
    line-height: normal;
    background: #4dbb03;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
}

.filebox label:hover {
  background-color: #4ca80e;
}

.filebox label:active {
  background-color: #367c36;
}

.filebox input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.circlr:hover{
    background: #0067FF;
}
.circlr{
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #007aff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
    cursor: pointer;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
}
.lisn-record-bar{
    margin-left: 16rem;
    position: fixed;
    bottom:0;
    width:100%;
    background: linear-gradient(to right,#eee9f1 30%,#bc158a);
    display: flex!important;
    transition: all .3s ease;
}
.lisn-record-bar-container{
    display: flex;
    height: 5rem;
    width: 100%;
    margin: 0 auto;
    padding-right: 15rem;
    justify-content: center;
    align-items: center;
    position: absolute;
}
.lisn-record-bar i{
    color: white;
}
</style>
