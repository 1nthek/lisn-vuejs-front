<template>
   <div>
        <div style="margin-bottom:30px;width: 100%;background: white;">
            <div style="padding: 0 15px;display: flex;justify-content: space-between;align-items: center;height: 40px;">
            <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:black;font-weight: bold;">내 노트</div>
            <button class="create-btn" @click.prevent="create_note()" style="outline: 0">
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
                        :updated_at="p.updated_at"
                        :created_at="p.created_at"
                        :color="p.color"
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
import VueAmplitude from 'vue-amplitude'
import Vue from 'vue'

Vue.use(VueAmplitude, { apiKey: 'f1f895bc97a1dfc905ea1bbc1f4af3f7' });

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
      'FETCH_LISTS',
      'CREATE_NOTE',
    ]),
    async fetch(){
      await this.FETCH_LISTS()
      this.isLoading = false;
    },
    create_note(){
      this.CREATE_NOTE();
      this.$amplitude.setUserId(this.user_id);
      this.$amplitude.logEvent('Create_Note');
    }
  }
}
</script>

<style scoped>

</style>

