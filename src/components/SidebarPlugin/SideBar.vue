<template>
<div class="sidebar-cont" v-on:click.stop="outside_clicked">
  <div class="sidenav navbar-vertical navbar-expand-xs" style="overflow-x: hidden;padding:0">
    <div class="scrollbar-inner ns-kr" style="padding: 24px 0px;background:#e2e2e2" ref="sidebarScrollArea">
      <div style="padding-bottom: 20px;">
          <div id="sidenav-logo" style="padding: 0px 14px">
            <logo></logo>
          </div>
      </div>
      <div class="navbar-inner" style="padding: 0 16px;">
        <ul class="navbar-nav">
          <slot name="links">
          </slot>
        </ul>
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
.navbar-vertical {
    box-shadow: 2px 0 8px 0 rgba(136, 152, 170, 0.6) !important;
}
.g-sidenav-pinned.g-sidenav-open .sidebar-cont{
  z-index: 1000;
  background: rgba(42,51,60,.8);
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