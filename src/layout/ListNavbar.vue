<template>
  <base-nav container-classes="container-fluid" class="navbar-top border-bottom navbar-expand" style="z-index: 100;background: white !important;box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.06);">
    
    <!-- Navbar links -->
    <ul class="navbar-nav align-items-center" style="margin-right: 1rem;">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div style="display:flex;">
          <div class="sidenav-toggler" style="margin-left: 12px;margin-right: 18px;display: flex;align-items: center;"
              :class="{active: $sidebar.showSidebar, 'sidenav-toggler-dark': type === 'default', 'sidenav-toggler-light': type === 'light'}"
              @click="toggleSidebar">
            <div class="sidenav-toggler-inner" style="font-size:24px">
              <i class="fas fa-bars"></i>
            </div>
          </div>
          <div id="sidenav-logo" style="padding: 0px 14px; width:200px;cursor: default;">
                <logo></logo>
          </div>

        </div>
      </li>
    </ul>

    <div style="display:flex;">
      <!-- Search form -->
      <form class="navbar-search form-inline mr-sm-3"
            :class="{'navbar-search-light': type === 'light', 'navbar-search-dark': type === 'default'}"
            id="navbar-search-main">
        <div class="form-group mb-0">
          <div class="input-group input-group-alternative input-group-merge">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
            <input class="form-control" placeholder="Search" type="text">
          </div>
        </div>
        <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </form>

      <ul class="navbar-nav align-items-center">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0 .5rem">
              <img :src="user_picture_url" class="rounded-circle z-depth-0" alt="avatar image" style="height: 34px;">
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-default" style="padding: 0">
              <ul class="dropdown-menu show dropdown-menu-right" style="min-width: 180px;">
                  <div class="dropdown-header noti-title dropdown-title ns-kr" style="color:black;cursor: default;text-transform: none;">
                    <div>
                      <div style="font-weight: bold;margin-bottom: 3px;">
                        {{user_name}}
                      </div>
                      <div>
                        {{user_email}}
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-divider"></div>
                  <div @click.prevent="$router.push('/profile')" class="dropdown-item" style="display: flex;">
                    <div class="navbar-icon">
                      <i class="fas fa-user-edit"></i>
                    </div>
                    <span class="ns-kr navbar-txt">프로필</span>
                  </div>
                  <div @click.prevent="$router.push('/contact')" class="dropdown-item" style="display: flex;">
                    <div class="navbar-icon">
                      <i class="fas fa-info-circle"></i>
                    </div>
                    <span class="ns-kr navbar-txt">피드백</span>
                  </div>
                  <div @click="signOut()" class="dropdown-item" style="display: flex;">
                    <div class="navbar-icon">
                      <i class="fas fa-running" style="font-size: 1.4em;"></i>
                    </div>
                      <span class="ns-kr navbar-txt">로그아웃</span>
                  </div>
                  <div class="dropdown-divider"></div>
                  <div style="display: flex;cursor: default;padding: 0rem 1rem;font-size: 12px;color: #bababa;font-weight: normal;">
                    <span class="ns-kr">LISN 웹 v0.4.2</span>
                  </div>
              </ul>
          </div>
        </li>
      </ul>

    </div>
  </base-nav>
</template>
<script>
import BaseNav from '../components/Navbar/BaseNav';
import Logo from "../assets/Logo"
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    // CollapseTransition,
    BaseNav,
    Logo,
    // Modal
  },
  props: {
    type: {
      type: String,
      default: 'light', // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },
  computed: {
    ...mapState([
      'user_name',
      'user_email',
      'user_picture_url',
    ]),
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
    };
  },
  created(){
    this.FETCH_PROFILE();
  },
  methods: {
    ...mapMutations([
      'logout',
    ]),
    ...mapActions([
      'FETCH_PROFILE',
    ]),
    signOut(){
      let self = this;
      gapi.load('auth2', function () {
        gapi.auth2.init().then(function () {
          self.logout();
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut();
          auth2.disconnect();
          self.$router.replace('/home');
        })
      })
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
  }
};
</script>
<style scoped>
.dropdown-item{
  transition: all 300ms ease-in 0s;
}
.dropdown-item:hover {
    background-color: #ececec;
}
@media (max-width: 767px){
  #sidenav-logo {
    display: none;
  }
}
#sidenav-logo g.logo-color1{
  fill: #000;
}
#sidenav-logo g.logo-color2{
  fill: black;
}
@media (max-width: 575.98px){
  .navbar-search {
      display: block;
      /* width: 1; */
      transform: translateX(0);
  }
}
.dropdown-title{
  font-size: 13px;
  font-weight: 400;
}
.navbar-txt{
  font-weight: 600;
  font-size: 14px;
}
.navbar-icon{
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 15px;
}
.nav-item{
    cursor: pointer;
}
</style>