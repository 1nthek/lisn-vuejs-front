<template>
    <div style="background:white;height: inherit;">
      <side-bar style="border: none;">
        <template slot="links">
          <sidebar-item :link="{ name: '모든 노트', path: '/list', icon: 'ni ni-books' }" :category="'all'"></sidebar-item>
          <sidebar-item :link="{ name: '공유 받은 노트', path: '/list', icon: 'ni ni-send' }" :category="'shared'"></sidebar-item>
          <!-- <sidebar-item :link="{ name: '즐겨찾기', path: '/list', icon: 'fas fa-star' }" ></sidebar-item> -->

          <sidebar-item :link="{name: '폴더', icon: 'ni ni-folder-17'}" :menu='true'>
            <template>
              <div v-for="dir in directories" :key="dir.directory_id">
                <sidebar-item :link="{ name: dir.name, path: '/list' }" :directory_id="dir.directory_id" :directory_name="dir.name"/>
              </div>
            </template>
          </sidebar-item>
          <hr class="my-3">
          <sidebar-item :link="{ name: '휴지통', path: '/trash', icon: 'fas fa-trash' }" :category="'trash'"></sidebar-item>
        </template>
    </side-bar>
    <div class="main-content">
      <!-- <base-header></base-header> -->
      <list-navbar ref="navbar" :type="$route.meta.navbarType"></list-navbar>
      <div class="lisn-home-comp" @click="$sidebar.displaySidebar(false)">
        <div class="notes-container">
            <vuescroll>
              <div style="margin-bottom:30px;width: 100%;background: white;">
                  <div style="padding: 0 15px;display: flex;justify-content: space-between;align-items: center;">
                    <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:#3e4861;font-weight: bold;">{{ directory_name }}</div>
                  </div>
              </div>
              <div v-if="isLoading" class="cont-isLoading" >
                <div class="list-isLoading"></div>
              </div>
              <div v-else class="row" style="margin:0" ref="contents">
                <table class="row" style="margin:0" ref="contents">
                  <tr class="deleted_conversation" style="padding: 0 15px; margin: 0 20px;">
                  <th>
                      <input type="checkbox" id="main-checkbox" v-model="selectAll" class="mat-checkbox" @click="allSelected()">
                      <button class="deleted_conversation_button" @click="deleteNote()">
                        <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;font-weight: bold" >
                          영구 삭제
                        </div>
                      </button>
                      <button class="deleted_conversation_button" @click="restoreNote()">
                        <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;font-weight: bold" >
                          복구
                        </div>
                      </button>
                  </th>
                  </tr>
                  <tr class="card-list"  v-for="p in noteList" :key="p.no" >
                    <input type="checkbox" :value="p.note_id" v-model="selected" class="mat-checkbox" @click="select()">
                    
                    <div class="trash-list">
                      <div class="trash-title">
                        {{ p.title}}
                      </div>
                      <div class="trash-summary">
                        {{ p.summary }}
                      </div>
                      <div class="trash-bottom">
                        {{ p.created_at}}
                      </div>
                      
                    </div>
                      
                  </tr>
              </table>
            </div>
           </vuescroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListNavbar from '../layout/ListNavbar'
import axios from 'axios'
import Swal from 'sweetalert2';
import { mapState, mapMutations, mapActions } from 'vuex'
import { setTokenInHeader } from '../api/api'

export default {
  components: {
    ListNavbar,
  },
  data() {
    return {
      isLoading: true,
      selected: [],
      selectAll: false
    }
    
  },
  // watch: {
  //   selected: function (val) {
  //     console.log(this.selected);
      
  //   },
  // },
  //////////////////////////
  computed: {
    ...mapState([
      'user_id',
      'directories',
      'directory_name',
      'noteList',
      'domain',
      'token',
    ]),
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    icon: String,
    note_id: "",
    title: String,
    summary: String,
    iconClasses: [String, Array]
  },
  created() {
    let self = this;
    if(!self.user_id || !self.token){
      delete localStorage.user_id;
      delete localStorage.token;
      self.$router.replace('/');
    }
    else{
      setTokenInHeader(self.token);
      this.FETCH_DIRECTORIES();
      this.FETCH_TRASH_LISTS();
      self.isLoading = false;
    }
  },
  methods: {
    ...mapActions([
      'FETCH_DIRECTORIES',
      'RESTORE_NOTE',
      'TRASH_NOTE',
      'FETCH_TRASH_LISTS'
    ]),
    select(){
      this.selectAll = false;
    },
    allSelected(){
      this.selected = [];
      if (!this.selectAll) {
          for (let p in this.noteList) {
              this.selected.push(this.noteList[p].note_id);
          }
      }
    },
    restoreNote() {
     for(let item in this.selected){
       this.RESTORE_NOTE(this.selected[item]);
     }
    },
    deleteNote() {
      Swal.fire({
        title: '노트 삭제',
        text: '노트를 영구 삭제합니다.',
        // type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-danger btn-fill',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          for(let item in this.selected){
            this.TRASH_NOTE(this.selected[item]);
          }
        }
      });
    }
  }
}
</script>

<style>
@media (min-width: 992px) { 
  .notes-container{
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
}

@media (min-width: 1200px) { 
  .notes-container{
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
}

.list-isLoading,
.list-isLoading:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.list-isLoading {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid #e1207920;
  border-right: 1.1em solid #e1207920;
  border-bottom: 1.1em solid #e1207920;
  border-left: 1.1em solid #e12079;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

div.card-list{
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-name: listSlide;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes listSlide {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
.cont-isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
}
.card-list {
    padding: 0 15px; 
    margin: 20px 20px 0px 20px;
    border-top: .1rem solid #adadad;
    border-bottom: .1rem solid #adadad;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 3.8rem;
    width:100%;
}
div{
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.nav-link-text{
  font-weight: bold;
  font-size: 14px;
}
a {
    text-decoration: none !important;
}
#noteList:hover{
    /* border: 1px solid navajowhite; */
    background: navajowhite;
    background: #EFEFEF;
    /* box-shadow: 0px 6px 10px 4px rgba(0, 0, 0, 0.16); */
}
#noteList{
    /* border: 1px solid rgba(0, 0, 0, 0.03); */
    background: #fafafa;
    /* background: #098db3a1; */
    /* box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.04); */
    color: black;
    font-size: 20px;
    transition: background 300ms ease-in 0s;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
    border-radius: 3px;
    background: white;
}
#noteList .note-date{
    color: #525f7f;
}

@media (min-width: 1200px){
  .col-xl-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 50%;
      max-width: 50%;
  }
}
.card-header:first-child {
    border-radius: 0.8rem;
}
.card-footer:last-child {
    border-radius: 0.8rem;
}
.card-footer:last-child {
    padding: 0;
}
.card {
    border-radius: 0.8rem;
    border: none;
    box-shadow: none;
}
.card-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
}

.create-btn{
    background-color: #f1404b !important;
    border-color: #f1404b !important;
    color: #fff !important;
    border-radius: 0.2rem;
    outline: 0;
}
.lisn-navbar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    margin-left: 16rem;
    z-index: 10;
    box-shadow: 0 0.2rem 0.5rem -0.3rem rgba(0,0,0,.2);
    background: linear-gradient(to left,#281483,#83157b 60%,#bc158a);
}
@media (min-width: 1200px){
  .main-content {
    margin-left: 250px !important;
  }
  .sidenav{
    margin-left: 0px !important;
  }
}
.sidenav{
    margin-left: -250px;
}
.g-sidenav-open .sidenav{
    margin-left: 0px !important;
}
.lisn-home-comp{
    /* padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem; */
    background: white;
}
.lisn-home-comp-container{
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content:space-between;
    height: 100vh;
    margin: -6.5rem 0;
    padding: 6.5rem 0 0.9rem 0;
}
.notes-container{
    word-break: break-word;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100vh;
    width: 100%;
    margin: -5rem 0;
    padding: 8rem 0 0rem 0;
    background: white;
    position: absolute;
}
.row {
    margin-right: 0px;
    margin-left: -15px;
}
.deleted_conversation {
    width: 100%;
}
.deleted_conversation_button {
    color: #f1404b;
    border: .1rem solid #f1404b;
    box-sizing: border-box;
    position: relative;
    user-select: none;
    cursor: pointer;
    outline: 0;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin-right: 1rem;
    border-radius: 4px;
    overflow: visible;
}
.mat-checkbox {
  margin: .4rem 1.6rem .4rem;
  display: inline-block;
  height: 16px;
  line-height: 0;
  order: 0;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  width: 16px;
  flex-shrink: 0;
}
.trash-summary {
  font-weight:600;
  font-size: 14px;
  height: 17px;
  color: #617386;
  transition: all .4s ease 0s;
  margin-top: .2rem;
}
.trash-list {
    width:flex;
    margin:8px;
}
.trash-title {
  font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.trash-bottom {
  font-size: 1rem;
  margin-top: .4rem;
}
</style>
