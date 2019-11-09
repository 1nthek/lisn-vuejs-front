<template>
<div class="sidebar-cont" v-on:click.stop="outside_clicked">
  <div class="sidenav navbar-vertical navbar-expand-xs" style="overflow-x: hidden;padding:0">
    <div class="scrollbar-inner ns-kr" style="padding: 24px 0px;background:#f0f0f0" ref="sidebarScrollArea">
      <div style="padding-bottom: 20px;">
          <router-link to="/">
            <div id="sidenav-logo" style="padding: 0px 14px">
              <logo></logo>
            </div>
          </router-link>
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
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "List of sidebar links as an array if you don't want to use components for these."
    },
  },
  methods: {
    minimizeSidebar() {
      let docClasses = document.body.classList
      if (this.$sidebar) {
        docClasses.add('g-sidenav-pinned')
        docClasses.add('g-sidenav-show')
      }
    },
    outside_clicked(){
      let docClasses = document.body.classList
      docClasses.remove('g-sidenav-open');
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
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
.g-sidenav-pinned.g-sidenav-open .sidebar-cont{
  z-index: 1000;
  background: rgba(42,51,60,.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
@media (min-width:1200px){
  .g-sidenav-pinned.g-sidenav-open .sidebar-cont{
    z-index: 0;
  }
}
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