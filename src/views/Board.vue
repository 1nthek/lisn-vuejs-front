<template>
    <div id="home">
      <!-- <sidebar></sidebar> -->
      <side-bar>
      <template slot-scope="props" slot="links">
        <sidebar-item :link="{ name: '모든 노트', path: '/board', icon: 'ni ni-books' }"></sidebar-item>
        <sidebar-item :link="{ name: '즐겨찾기', path: '/board', icon: 'fas fa-star' }"></sidebar-item>
        <sidebar-item :link="{name: '공유된 노트', icon: 'ni ni-send',}">
          <sidebar-item :link="{ name: 'Shared1', path: '/dashboard' }"></sidebar-item>
          <sidebar-item :link="{ name: 'Shared2', path: '/alternative' }"></sidebar-item>
        </sidebar-item>

        <sidebar-item :link="{name: '폴더',icon: 'ni ni-folder-17'}">
          <sidebar-item :link="{ name: '폴더1', path: '/components/icons' }"/>
          <sidebar-item :link="{ name: '폴더2', path: '/components/typography' }"/>

          <!-- <sidebar-item :link="{ name: 'Multi Folder' }">
            <sidebar-item :link="{ name: 'Folder3', path:'#!' }"/>
            <sidebar-item :link="{ name: 'Folder4', path:'#a' }"/>
          </sidebar-item> -->
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
      <div class="menus2">
        </div>
    </side-bar>
    <div class="main-content">
      <!-- <base-header></base-header> -->
      <board-navbar :type="$route.meta.navbarType"></board-navbar>


      <div @click="$sidebar.displaySidebar(false)">
          <div class="lisn-home-comp">
            <!-- <div class="lisn-home-comp-container"> -->
                <div class="notes-container" style="margin-bottom:30px">

                    <!-- <paginated-tables></paginated-tables> -->
                    <!-- <board-table title="All Notes"></board-table> -->
                    <!-- <card body-classes="px-0 pb-0 pt-0" class="mb-0"> -->
                        <!-- <template slot="header"> -->
                          <div style="padding: 0;display: flex;justify-content: space-between;align-items: center;">
                            <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:#3e4861;font-weight: bold;">모든 노트</div>
                            <div class="create-bar">
                                <button class="create-btn" @click="newPage()">
                                  <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;">
                                    + 새 노트
                                  </div>
                                </button>
                            </div>

                          </div>
                        <!-- </template> -->
                      <!-- <div>
                          <div class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
                            <div style="max-width: 300px;">
                              <base-input v-model="searchQuery" prepend-icon="fas fa-search" placeholder="Search..."></base-input>
                            </div>
                          </div>
                      </div> -->
                    <!-- <div slot="footer" class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
                      <div class="flex-con" style="display: flex;align-items: center;justify-content: center;">
                        <base-pagination
                          class="pagination-no-border"
                          v-model="pagination.currentPage"
                          :per-page="pagination.perPage"
                          :total="total">
                        </base-pagination>
                      </div>
                      <div class="flex-con"></div>
                    </div> -->
                  <!-- </card>  -->
                    
                </div>
            <!-- </div> -->
          <div class="row">
            <div class="col-xl-3 col-md-6"  v-for="p in this.$store.state.noteList" :key="p.no">
              <stats-card :title="p.title"
                          :note_id="p.note_id"
                          type="gradient-orange"
                          sub-title="STT"
                          id="noteList"
                          icon="fas fa-trash">

                <template slot="footer">
                  <div class="note-date ns-kr" style="font-weight: bold;">
                    <span class="text-nowrap mr-4"><i class="fa fa-arrow-up"></i>{{ p.updated_at }} </span>
                    <span class="text-nowrap">{{ p.created_at }}</span>
                  </div>
                </template>
              </stats-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Sidebar from '../components/Sidebar.vue'
import StatsCard from '../components/Cards/StatsCard'
import BoardNavbar from '../layout/BoardNavbar'
import axios from 'axios'
import { noteList } from '../api/api.js'
import swal from 'sweetalert2';

// import { FadeTransition } from 'vue2-transitions';
// import BoardTable from './Tables/BoardTable'
import PaginatedTables from './Tables/PaginatedTables'

export default {
  components: {
    // Sidebar,
    PaginatedTables,
    BoardNavbar,
    StatsCard
    // FadeTransition
    // BoardTable
  },
  data() {
    return {
      user_id: -1,
    }
  },
  created() {
    this.$store.commit('setUserId', 'glisn_user_id');
    this.user_id = this.$store.state.user_id;
    this.$store.commit('getNoteList');
  },
  methods: {
    newPage() {
      let self = this;
      var formData = new FormData();
      formData.append('user_id', this.$store.state.user_id);
      axios.post( this.$store.state.domain + '/record/note', formData)
        .then((res) => {
          var note_id = res.data.note_id;
          self.$store.commit('setCookie', {name: 'glisn_note_id', value: note_id, exp: 365});
          self.$router.push('/write');
        })
        .catch((ex) => { 
          console.log('실패'); 
        });
    }
  },
}
</script>

<style>
.nav-link-text{
  font-weight: bold;
  font-size: 14px;
}
a {
    text-decoration: none !important;
}
#noteList:hover{
    color: white;
    background: #246c8f;
}
#noteList{
    border: 1px solid rgba(0, 0, 0, 0.15);
    /* background: #098db3; */
    /* background: #098db3a1; */
    color: black;
    font-size: 20px;
    transition: all .4s ease 0s;
    border-radius: 0.5rem;
}
#noteList .note-date{
    color: #525f7f;
}
#noteList:hover .note-date{
    color: white;
}
#noteList H5{
    color: #617386;
    transition: all .4s ease 0s;
}

#noteList:hover H5{
    color: rgb(167, 197, 229);
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
.create-bar{
    padding: 12px;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.create-btn{
    background-color: #1867c0 !important;
    border-color: #1867c0 !important;
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
  .g-sidenav-pinned .sidenav.fixed-left + .main-content {
    margin-left: 250px;
  }
}
.lisn-home-comp{
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
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
    /* flex: 1; */
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem 0rem rgba(0,0,0,.05)!important;
    background: white;
}

</style>
