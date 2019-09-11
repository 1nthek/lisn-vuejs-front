<template>
  <div class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" style="overflow-x: hidden;padding:0" :data="backgroundColor">
    <!-- @mouseenter="$sidebar.onMouseEnter()"@mouseleave="$sidebar.onMouseLeave()" -->
    <div class="scrollbar-inner ns-kr" style="padding: 24px 20px;background:#f0f0f0" ref="sidebarScrollArea">
      <div style="padding-bottom: 20px;">
          <router-link to="/list">
            <div id="sidenav-logo" class="navbar-brand" style="padding: 0">
              <logo></logo>
            </div>
          </router-link>
        <!-- <div class="ml-auto">
          <div class="sidenav-toggler d-none d-xl-block"
               :class="{'active': !$sidebar.isMinimized }"
               @click="minimizeSidebar">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div> -->
      </div>
      <slot></slot>
      <div class="navbar-inner" style="padding: 0 16px;">
        <ul class="navbar-nav">
          <slot name="links">
            <sidebar-item
              v-for="(link, index) in sidebarLinks"
              :key="link.name + index"
              :link="link">
              <sidebar-item
                v-for="(subLink, index) in link.children"
                :key="subLink.name + index"
                :link="subLink">
              </sidebar-item>
            </sidebar-item>
          </slot>
        </ul>
        <slot name="links-after"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "../../assets/Logo"
export default {
  name: 'sidebar',
  components: {
    Logo,
  },
  props: {
    title: {
      type: String,
      default: 'Creative Tim',
      description: 'Sidebar title'
    },
    shortTitle: {
      type: String,
      default: 'CT',
      description: 'Sidebar short title'
    },
    logo: {
      type: String,
      default: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/brand/green.png',
      description: 'Sidebar app logo'
    },
    backgroundColor: {
      type: String,
      default: 'vue',
      validator: value => {
        let acceptedValues = [
          '',
          'vue',
          'blue',
          'green',
          'orange',
          'red',
          'primary'
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
      description:
        'Sidebar background color (vue|blue|green|orange|red|primary)'
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "List of sidebar links as an array if you don't want to use components for these."
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  methods: {
    minimizeSidebar() {
      let docClasses = document.body.classList
      if (this.$sidebar) {
        docClasses.add('g-sidenav-pinned')
        docClasses.add('g-sidenav-show')
      }
    }
  },
  mounted() {
    this.$sidebar.isMinimized = this.$sidebar.breakpoint < window.innerWidth
    this.minimizeSidebar()
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  }
};
</script>
<style>
.g-sidenav-hidden .sidenav:hover {
    max-width: 61px !important;
}
#sidenav-logo g.logo-color1{
  fill: #000;
}
#sidenav-logo g.logo-color2{
  fill: black;
}
</style>