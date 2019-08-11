<template>
  <!-- <transition appear name="fade"> -->
    <div id="write">
      <RecSidebar></RecSidebar>
      <base-header></base-header>
      <Workspace></Workspace>
    </div>
  <!-- </transition> -->
</template>

<script>
import RecSidebar from './../components/RecSidebar.vue'
import Workspace from './../components/Workspace.vue'

export default {
  components: {
    RecSidebar,
    Workspace
  }
}
</script>

<style scoped>
</style>
