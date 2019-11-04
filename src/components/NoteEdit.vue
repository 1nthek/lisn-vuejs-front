<template>
  <vuescroll>
    <div class="lisn-note-container ns-kr">
      <div style="display: flex;justify-content: space-between;">
        <input type="text" v-on:input="typing" v-model="noteTitle" placeholder="제목을 입력하세요" style="font-size: 24px;font-weight: bold;margin-bottom: 10px;width: 100%;">
      </div>
      <div class="cell">
        <div class="date-cell">
            <div class="cell-title-container">
                <div class="cell-title">
                    <div class="cell-title-inner">
                        <div class="cell-title-img">
                            <i class="far fa-clock"></i>
                        </div>
                        <div class="cell-title-text ns-kr"> 노트 생성 </div>
                    </div>
                </div>
            </div>
            <div class="cell-data-container">
                <div class="cell-data ns-kr" style="cursor: default;">
                  <div style="color:black">{{note_created_at}}</div>
                </div>
            </div>
        </div>
      </div>
      <div class="cell">
        <div class="date-cell">
            <div class="cell-title-container">
                <div class="cell-title">
                    <div class="cell-title-inner">
                        <div class="cell-title-img">
                            <i class="far fa-clock"></i>
                        </div>
                        <div class="cell-title-text ns-kr"> 최종 수정 </div>
                    </div>
                </div>
            </div>
            <div class="cell-data-container">
                <div class="cell-data ns-kr" style="cursor: default;">
                  <div style="color:black">{{note_updated_at}}</div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <Editor ref="editor" :content="content"></Editor>
    </vuescroll>
</template>

<script>
// import Vue from 'vue'
import DatePick from 'vue-date-pick'
import 'vue-date-pick/dist/vueDatePick.css'
import fecha from 'fecha'
import Editor from './Editor'
import { mapState, mapMutations, mapActions } from 'vuex'


fecha.i18n = {
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNames: ['Sunday', 'Monday', '화요일', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  amPm: ['오전', '오후'],
  // D is the day of the month, function returns something like...  3rd or 11th
  DoFn: function (D) {
    return D + [ 'th', 'st', 'nd', 'rd' ][ D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10 ]
  }
}
export default {
  components: {
    DatePick,
    Editor,
  },
  data: () => ({
    format: 'YYYY.MM.DD ddd A hh:mm',
    date: fecha.format(new Date(), this.format),
    popUp: false,
    flag: false,

    content: "",
    title: "제목",
  }),
  computed: {
    ...mapState([
      'user_id',
      'note_id',
      'token',
      'domain',
      'note_created_at',
      'note_updated_at',
    ]),
    noteTitle:{
      get () { return this.$store.state.noteTitle},
      set (value) {  this.set_noteTitle(value) }
    }
  },
  methods: {
    ...mapMutations([
      'set_noteTitle',
    ]),
    typing(e) {
      this.noteTitle = e.target.value;
      this.$refs.editor.saveNote(this.noteTitle);
    },
    parseDate (dateString, format) {
      return fecha.parse(dateString, format)
    },
    formatDate (dateObj, format) {
      return fecha.format(dateObj, format)
    },
    goBack () {
      if (!this.flag) {
        this.popUp = false
      }
      this.flag = false
    },
    vaild () {
      this.flag = true
    }
  }

}
</script>
<style>
input{
  color: #273849 !important;
}
input:focus{
  outline:none;
}
div[contenteditable=true]:empty:before {
    content: attr(placeholder);
    color: rgb(182, 182, 182);
    display: block;
}
div[contenteditable="true"]:focus {
   outline: none;
}
.cell-title-text{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #303133;
}
.text-cell, .person-cell, .date-cell{
    display: inherit;
}
div.vdpComponent.vdpWithInput :focus{
  background: rgba(255, 212, 85, 0.2);
  outline: none;
}
.vdpComponent.vdpWithInput>input {
    position: relative;
    display: inline-block;
    font-size: 14px;
    color: #303030;
    width: 110%;
    padding: 0px;
}
.vdpComponent.vdpWithInput>button{
    display: none;
    visibility: collapse;
}
.vdpClearInput{
    display: none !important;
    visibility: collapse;
}
.lisn-note-container{
    position: relative;
    z-index: 0;
}
.cell{
    display: flex;
}
.cell-title-container{
    display: flex;
    align-items: center;
    height: 34px;
    width: 120px;
    flex: 0 0 auto;
    /* color: rgba(55, 53, 47, 0.6); */
}
.cell-title{
    /* cursor: pointer; */
    user-select: none;
    /* transition: background 120ms ease-in 0s; */
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 3px;
}
.cell-title-inner{
    display: flex;
    align-items: center;
    line-height: 130%;
    font-size: 14px;
    min-width: 0px;
}
.cell-title-img{
    margin-right: 10px;
    font-size: 16px;
    color: #303133;
}
.cell-data-container{
    display: flex;
    align-items: center;
    margin-left: 4px;
    height: 100%;
    flex: 1 1 auto;
}
.cell-data{
    cursor: pointer;
    user-select: none;
    transition: background 120ms ease-in 0s;
    display: flex;
    align-items: center;
    border-radius: 3px;
    width: 100%;
    min-height: 34px;
    padding: 6px 8px 7px;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #303133;
}
.people-container{
    display: flex;
    flex-wrap: wrap;
}
.person-container{
    display: flex;
    align-items: center;
    flex-shrink: 0;
    min-width: 0px;
    height: 18px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 150%;
    margin: 0px 10px 6px 0px;
}
.person{
    display: flex;
    align-items: center;
    width: 100%;
}
.person-img-container{
    margin-right: 6px;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.person-img{
    background: white;
    border-radius: 100%;
    box-shadow: none;
}
</style>
