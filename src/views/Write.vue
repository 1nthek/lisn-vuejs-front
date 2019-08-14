<template>
    <div>
      <!-- <RecSidebar></RecSidebar> -->
      <!-- <base-header></base-header> -->
      <write-navbar v-on:saveNote="saveNote"></write-navbar>
      <Workspace ref="saveNote"></Workspace>
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
  },
  data(){
    return{
      user_id: -1,
      note_id: -1,
    }
  },
  created() {
    this.$store.commit('setUserId', 'glisn_user_id');
    this.user_id = this.$store.state.user_id;
    this.$store.commit('setNoteId', 'glisn_note_id');
    this.note_id = this.$store.state.note_id;
  },
  methods: {
    saveNote(){
      this.$refs.saveNote.saveNote();
    }
  }
}
</script>

<style scoped>
</style>
