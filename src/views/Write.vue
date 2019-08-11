<template>
    <div>
      <!-- <RecSidebar></RecSidebar> -->
      <!-- <base-header></base-header> -->
      <div class="main-content">
        <write-navbar></write-navbar>
      </div>
      <Workspace></Workspace>
    </div>
</template>

<script>
// import RecSidebar from './../components/RecSidebar.vue'
import Workspace from './../components/Workspace.vue'
import WriteNavbar from '../layout/WriteNavbar'

export default {
  components: {
    // RecSidebar,
    Workspace,
    WriteNavbar,
  }
}
</script>

<style scoped>
</style>
