<template>
   <div>
        <div style="margin-bottom:30px;width: 100%;background: white;">
            <div style="padding: 0 15px;display: flex;justify-content: space-between;align-items: center;height: 40px;">
            <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:black;font-weight: bold;">{{directory_name}}</div>
            <button class="create-btn" @click.prevent="create_note()">
                <div class="ns-kr create-btn-cont">
                + 새 노트
                </div>
            </button>
            </div>
        </div>
        <div v-if="isLoading" class="cont-isLoading" >
        <div class="list-isLoading"></div>
        </div>
        <div v-else class="row" style="margin:0" ref="contents">
            <div class="col-xl-3 col-md-6 ani-card"  v-for="p in noteList" :key="p.no" >
            <stats-card :title="p.title"
                        :note_id="p.note_id"
                        :summary="p.summary"
                        :updated_at="p.updated_at"
                        :created_at="p.created_at"
                        :color="p.color"
                        :is_shared="p.is_shared"
                        :num_of_share="p.num_of_share"
                        id="noteList"
                        v-on:openNote="openNote()">
            </stats-card>
            </div>
        </div>
   </div>
</template>

<script>
import StatsCard from '../Cards/StatsCard'
import { mapState, mapMutations, mapActions } from 'vuex'
import { setTokenInHeader } from '../../api/api.js'
export default {
  components: {
    StatsCard,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    ...mapState([
      'user_id',
      'noteList',
      'token',
      'directory_name',
    ]),
    
  },
  created() {
    if(!this.user_id || !this.token){
      delete localStorage.user_id;
      delete localStorage.token;
      this.$router.replace('/');
    }
    else{
      setTokenInHeader(this.token)
      this.set_curDirectory('directory')
      this.fetch()
      this.$amplitude.setUserId(this.user_id)
      this.$amplitude.logEvent('directoryList')
    }
  },
  watch: {
    $route(to) {
      this.isLoading = true
      this.set_curDirectory('directory')
      this.fetch()
      this.$amplitude.setUserId(this.user_id)
      this.$amplitude.logEvent('directoryList')
    }
  },
  methods: {
    ...mapMutations([
      'set_curDirectory',
    ]),
    ...mapActions([
      'FETCH_DIRECTORY_LISTS',
      'CREATE_NOTE_AND_SET_DIRECTORY'
    ]),
    async fetch(){
        const directory_id = this.$route.params.fid;
        const directory_name = this.$route.params.name;
        await this.FETCH_DIRECTORY_LISTS({directory_id, directory_name})
        this.isLoading = false;
    },
    create_note() {
      this.CREATE_NOTE_AND_SET_DIRECTORY(this.$route.params.fid)
      this.$amplitude.setUserId(this.user_id)
      this.$amplitude.logEvent('Create_Note')
    }
  }
}
</script>

<style scoped>
</style>