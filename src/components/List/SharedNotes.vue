<template>
   <div>
        <div style="margin-bottom:30px;width: 100%;background: white;">
            <div style="padding: 0 15px;display: flex;justify-content: space-between;align-items: center;height: 40px;">
            <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:black;font-weight: bold;">공유 받은 노트</div>
            <button class="create-btn" @click.prevent="CREATE_NOTE" style="outline: 0">
                <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;font-weight: bold">
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
                        id="noteList"
                        v-on:openNote="openNote()">

                <template slot="footer">
                <div class="note-date ns-kr" style="font-weight: bold;color:#666666">
                    <span class="text-nowrap mr-5"><i class="fas fa-upload"></i> &nbsp; {{ p.updated_at }} </span>
                    <span class="text-nowrap">{{ p.created_at }}</span>
                </div>
                </template>
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
    ]),
    
  },
  created() {
    let self = this;
    if(!self.user_id || !self.token){
      delete localStorage.user_id;
      delete localStorage.token;
      self.$router.replace('/');
    }
    else{
        setTokenInHeader(self.token);
        self.fetch();
    }
  },
  methods: {
    ...mapActions([
      'FETCH_SHARED_LISTS',
      'CREATE_NOTE',
    ]),
    async fetch(){
      await this.FETCH_SHARED_LISTS()
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>

</style>

