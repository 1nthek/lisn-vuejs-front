<template>
  <base-nav container-classes="container-fluid" class="navbar-top border-bottom navbar-expand" :class="{'navbar-dark': type === 'default'}" style="background: #09b3af !important;height: 4rem;">
    <!-- Search form -->
    <!-- <form class="navbar-search form-inline mr-sm-3"
          :class="{'navbar-search-light': type === 'default', 'navbar-search-dark': type === 'light'}"
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
    </form> -->
    <!-- Navbar links -->
    <ul class="navbar-nav align-items-center ml-md-auto" style="margin-right: 1rem;">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div class="pr-3 sidenav-toggler"
             :class="{active: $sidebar.showSidebar, 'sidenav-toggler-dark': type === 'default', 'sidenav-toggler-light': type === 'light'}"
             @click="toggleSidebar">
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="ni ni-ungroup"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right">
          <div class="row shortcuts px-4">
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-red">
                      <i class="ni ni-calendar-grid-58"></i>
                    </span>
              <small>Calendar</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-orange">
                      <i class="ni ni-email-83"></i>
                    </span>
              <small>Email</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-info">
                      <i class="ni ni-credit-card"></i>
                    </span>
              <small>Payments</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i class="ni ni-books"></i>
                    </span>
              <small>Reports</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-purple">
                      <i class="ni ni-pin-3"></i>
                    </span>
              <small>Maps</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-yellow">
                      <i class="ni ni-basket"></i>
                    </span>
              <small>Shop</small>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </base-nav>
</template>
<script>
// import { CollapseTransition } from 'vue2-transitions';
import BaseNav from '../components/Navbar/BaseNav';
import axios from 'axios'
// import { BaseNav, Modal } from '@/components';

export default {
  components: {
    // CollapseTransition,
    BaseNav,
    // Modal
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },
  computed: {
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
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
<style scoped>
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