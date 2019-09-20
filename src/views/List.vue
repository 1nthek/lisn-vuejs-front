<template>
    <div style="background:white;height: inherit;">
      <div>appal</div>
      <side-bar style="border: none;">
        <template slot-scope="props" slot="links">
          <sidebar-item :link="{ name: '모든 노트', path: '/list', icon: 'ni ni-books' }"></sidebar-item>
          <sidebar-item :link="{ name: '즐겨찾기', path: '/list', icon: 'fas fa-star' }" ></sidebar-item>
          <sidebar-item :link="{ name: '공유 받은 노트', path: '/list', icon: 'ni ni-send' }" ></sidebar-item>
          <!-- <sidebar-item :link="{ name: '폴더', path: '/list', icon: 'ni ni-folder-17' }" ></sidebar-item> -->

          <sidebar-item :link="{name: '폴더', icon: 'ni ni-folder-17'}">
            <template>
              <div v-for="dir in $store.state.directories" :key="dir.directory_id">
                <sidebar-item :link="{ name: dir.name, path: '/list' }" :directory_id="dir.directory_id" :directory_name="dir.name"/>
              </div>
            </template>
            <!-- <sidebar-item :link="{ name: '폴더1', path: '/list' }"/> -->
          </sidebar-item>
        </template>
        <template slot="links-after">
          <hr class="my-3">
          <!-- <h6 class="navbar-heading p-0 text-muted">Documentation</h6> -->

          <ul class="navbar-nav mb-md-3">
            <li class="nav-item">
              <div class="nav-link">
                <i class="fas fa-trash"></i>
                <span class="nav-link-text">휴지통</span>
              </div>
            </li>
          </ul>
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
                    <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:#3e4861;font-weight: bold;">모든 노트</div>
                    <button class="create-btn" @click="newPage()">
                      <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;">
                        + 새 노트
                      </div>
                    </button>
                  </div>
              </div>
              <div class="cont-loader" ref="loader">
                <div class="list-loader"></div>
              </div>
              <div class="row" style="visibility:hidden;margin:0" ref="contents">
                  <div class="col-xl-3 col-md-6 ani-card"  v-for="p in this.$store.state.noteList" :key="p.no" >
                    <stats-card :title="p.title"
                                :note_id="p.note_id"
                                :summery="p.summery"
                                type="gradient-orange"
                                id="noteList"
                                icon="fas fa-trash"
                                v-on:openNote="openNote()">

                      <template slot="footer">
                        <div class="note-date ns-kr" style="font-weight: bold;">
                          <span class="text-nowrap mr-5"><i class="fas fa-upload"></i> &nbsp; {{ p.updated_at }} </span>
                          <span class="text-nowrap">{{ p.created_at }}</span>
                        </div>
                      </template>
                    </stats-card>
                  </div>
            </div>
           </vuescroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Sidebar from '../components/Sidebar.vue'
import StatsCard from '../components/Cards/StatsCard'
import ListNavbar from '../layout/ListNavbar'
import axios from 'axios'
import { noteList } from '../api/api.js'
import Swal from 'sweetalert2';

// import { FadeTransition } from 'vue2-transitions';
// import BoardTable from './Tables/BoardTable'
// import PaginatedTables from './Tables/PaginatedTables'

export default {
  components: {
    // Sidebar,
    // PaginatedTables,
    ListNavbar,
    StatsCard,
    // FadeTransition
    // BoardTable
  },
  data() {
    return {
      user_id: -1,
    }
  },
  created() {
    let self = this;
    self.user_id = null;
    self.$store.state.user_id = null;
    setTimeout(() => {
      gapi.load('auth2', function () {
        gapi.auth2.init().then(function () {
          var auth2 = gapi.auth2.getAuthInstance();
          if (auth2.isSignedIn.get() == true) {
            self.$store.commit('setUserId');
            self.user_id = self.$store.state.user_id;
            if(self.$store.state.user_id == null){
              var auth2 = gapi.auth2.getAuthInstance();
              localStorage.removeItem('glisn_user_id');
              localStorage.removeItem('glisn_note_id');
              auth2.signOut();
              auth2.disconnect();
              self.$router.push('/');
            }
            else{
              let ref = self.$refs['contents'];
              ref.style.visibility = "visible";
              ref = self.$refs['loader'];
              ref.style.display = "none";
              self.$store.commit('getNoteList');
              if(self.$store.state.error){
                  self.$router.push('/');
              }
              self.$store.commit('getDirectoryList');
            }
          }
          else{
            self.$router.push('/home');
          }
        });
      })
    }, 300);  //delay loading

    // setTimeout(() => {
    //   let ref = this.$refs['contents'];
    //   ref.style.visibility = "visible";
    //   ref = this.$refs['loader'];
    //   ref.style.display = "none";
    // }, 300);  //delay loading


  },
  methods: {
    newPage() {
      let self = this;
      var formData = new FormData();
      formData.append('user_id', this.$store.state.user_id);
      axios.post( this.$store.state.domain + '/note', formData)
        .then((res) => {
          var note_id = res.data.note_id;          
          localStorage.setItem('glisn_note_id', note_id);
          self.$store.commit('setNoteId');
          self.$router.push('/note');
        })
        .catch((ex) => {
        });
    }
  },
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

.list-loader,
.list-loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.list-loader {
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

div.ani-card{
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
.cont-loader {
    display: flex;
    align-items: center;
    justify-content: center;
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

</style>
