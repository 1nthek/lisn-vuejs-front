<template>
  <vuescroll>
    <div class="lisn-note-container">
      <div class="ns-kr" id="noteTitle" ref="noteTitle" contenteditable="true" placeholder="Untitled" style="font-size: 24px;font-weight: bold;margin-bottom: 10px;">{{this.$store.state.noteTitle=="untitled"?"":this.$store.state.noteTitle}}</div>
        <template v-for="item in cellData" v-if="item.cellType === 'date'">
            <div class="cell" v-bind:key='item.id'>
                <div class="date-cell">
                    <div class="cell-title-container">
                        <div class="cell-title">
                            <div class="cell-title-inner">
                                <div class="cell-title-img">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div contenteditable="true" class="cell-title-text"> {{ item.cellTitle }} </div>
                            </div>
                        </div>
                    </div>
                    <div class="cell-data-container">
                        <div class="cell-data">
                            <date-pick v-model="item.cellContent" :weekdays="weekdays" :months="months" :parseDate="parseDate" :formatDate="formatDate" :startWeekOnSunday="startWeekOnSunday" :nextMonthCaption="nextMonthCaption" :prevMonthCaption="prevMonthCaption" :setTimeCaption="setTimeCaption" :mobileBreakpointWidth="mobileBreakpointWidth" :selectableYearRange="selectableYearRange" :format="format"></date-pick>
                            <!-- <date-pick v-model="item.cellContent" :pickTime="pickTime" :key="id" :weekdays="weekdays" :months="months" :parseDate="parseDate" :formatDate="formatDate" :startWeekOnSunday="startWeekOnSunday" :nextMonthCaption="nextMonthCaption" :prevMonthCaption="prevMonthCaption" :setTimeCaption="setTimeCaption" :mobileBreakpointWidth="mobileBreakpointWidth" :selectableYearRange="selectableYearRange" :format="format"></date-pick> -->
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="item.cellType === 'text'">
            <div class="cell">
                <div class="text-cell">
                    <div class="cell-title-container">
                        <div class="cell-title">
                            <div class="cell-title-inner">
                                <div class="cell-title-img">
                                    <i class="fas fa-align-left"></i>
                                </div>
                                <div contenteditable="true" class="cell-title-text">{{ item.cellTitle }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="cell-data-container">
                        <div class="cell-data">
                            <div contenteditable="true" placeholder="text" style="min-width: 10rem; line-height: 130%;">{{ item.cellContent }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="item.cellType === 'person'">
            <div class="cell">
                <div class="person-cell">
                    <div class="cell-title-container">
                        <div class="cell-title">
                            <div class="cell-title-inner">
                                <div class="cell-title-img">
                                    <i class="fas fa-user-friends"></i>
                                </div>
                                <div contenteditable="true" class="cell-title-text">{{ item.cellTitle }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="cell-data-container">
                      <div class="cell-data">
                        <div class="people-container">
                          <template v-for="item2 in item.cellContent">
                            <div class="person-container" v-bind:key='item2.id'>
                              <div class="person">
                                <div contenteditable="true" placeholder="name">{{ item2.personName }}</div>
                              </div>
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </template>
        <!-- <div style="cursor: pointer; user-select: none; transition: background 120ms ease-in 0s; display: flex; align-items: center; color: rgba(55, 53, 47, 0.4); border-radius: 3px; padding-left: 6px; padding-right: 6px; height: 34px; width: 160px;">
            <div style="display: block; fill: rgba(55, 53, 47, 0.3); flex-shrink: 0; backface-visibility: hidden; margin-right: 11px; margin-top: 1px;">
                <i class="fas fa-plus"></i>
            </div>
            <div @click="addCell">
                Add a Property
            </div>
        </div> -->
    </div>
    <editor ref="saveNote" :content="content"></editor>
    </vuescroll>
</template>

<script>
// import Vue from 'vue'
import DatePick from 'vue-date-pick'
import 'vue-date-pick/dist/vueDatePick.css'
import fecha from 'fecha'
import axios from 'axios'
import Editor from './Editor'

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
    format: 'YYYY.MM.DD ddd A h:mm',
    date: fecha.format(new Date(), this.format),
    popUp: false,
    flag: false,
    dX: '9px',
    dY: '9px',

    user_id: -1,
    note_id: -1,
    content: "",

    title: "제목",
    data: [],
    cellData: [
      {
        cellType: 'date',
        cellTitle: '시작 시간',
        cellContent: '2019.07.16 화 오후 1:00'
      },
      {
        cellType: 'date',
        cellTitle: '종료 시간',
        cellContent: '2019.07.16 화 오후 3:30'
      },
    ]
  }),
   watch: {
    title: function (newtitle) {
      this.title = newtitle;
    }
  },
  beforeDestroy(){
    this.$refs.saveNote.saveNoteAuto(this.$store.state.note_id, this.$refs.noteTitle.innerHTML);
  },
  created(){
    let self = this;
    // window.addEventListener('beforeunload', function (event) {
    // })
  },
  computed: {
    styleObject () {
      return {
        left: this.dX + 'px',
        top: this.dY + 'px',
        position: 'fixed'
      }
    }
  },
  props: {
    // value: {type: String, default: ''},
    // format: {type: String, default: 'YYYY-MM-DD'},
    // displayFormat: {type: String},
    // hasInputElement: {type: Boolean, default: true},
    // inputAttributes: {type: Object},
    selectableYearRange: {type: Number, default: 40},
    pickTime: {type: Boolean, default: true},
    // pickMinutes: {type: Boolean, default: true},
    // pickSeconds: {type: Boolean, default: false},
    // isDateDisabled: {type: Function, default: () => false},
    nextMonthCaption: {type: String, default: '다음 달'},
    prevMonthCaption: {type: String, default: '이전 달'},
    setTimeCaption: {type: String, default: '시간 설정:'},
    mobileBreakpointWidth: {type: Number, default: 500},
    weekdays: {
      type: Array,
      default: () => ([
        '월', '화', '수', '목', '금', '토', '일'
      ])
    },
    months: {
      type: Array,
      default: () => ([
        '1월', '2월', '3월', '4월',
        '5월', '6월', '7월', '8월',
        '9월', '10월', '11월', '12월'
      ])
    },
    startWeekOnSunday: {type: Boolean, default: true}
  },
  watch: {
    popUp() {
      // console.log(this.$refs.date)
    }
  },
  methods: {
    saveNote(){
      this.$refs.saveNote.saveNote(this.$store.state.note_id, this.$refs.noteTitle.innerHTML);
    },
    typing(e) {
    	this.title = e.target.value
    },
    addCell () {
      this.cellData.push({
        cellType: 'text',
        cellTitle: '제목',
        cellContent: ''
      })
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
    /* pointer-events: auto; */
    position: relative;
    z-index: 0;
}
.pop-up{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    /* background: rgba(0, 0, 0, 0.4); */
    z-index: 99;
    /* pointer-events: none; */
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
    font-size: 14px;
    /* overflow: hidden; */
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
