<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id">
    <div style="display:flex;flex-basis: auto;">
      <div style="flex: auto;">
        <div class="row">
          <div class="col ns-kr">
            <slot>
              <div style="display:flex">
                <div v-if="color==-1" class="lisn-flag color-9" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==0" class="lisn-flag color-0" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==1" class="lisn-flag color-1" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==2" class="lisn-flag color-2" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==3" class="lisn-flag color-3" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==4" class="lisn-flag color-4" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==5" class="lisn-flag color-5" @click.stop="moveDirectory(note_id)"></div>
                <div class="card-list-title" v-if="title">{{title}}</div>
              </div>
              <div class="card-list-summary">{{summary}}</div>
            </slot>
          </div>
        </div>

        <div class="note-date ns-kr" style="font-weight: bold;color:#666666;font-size: 13px;display: flex;display: flex;align-items: center;">
            <div class="text-nowrap" v-html="created_at"></div>
            <div v-if="is_shared" class="lisn-badge ns-kr"><i class="fas fa-share"></i>&nbsp;공유&nbsp;{{num_of_share+1}}</div>
        </div>
      </div>
      <div style="display: flex;align-items: center;margin-right: 10px;color:darkgray">
        <div class="ns-kr cont3">
          <div id="trash" @click.stop="unshareNote(note_id, title)" class="card-icon-cont">
            <i class="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import Card from './Card.vue';
import Swal from 'sweetalert2';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'stats-card',
  components: {
    Card
  },
  computed: {
    ...mapState([
      'directories',
    ]),
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    icon: String,
    note_id: "",
    title: String,
    summary: String,
    color: Number,
    num_of_share: Number,
    is_shared: Boolean,
    updated_at: String,
    created_at: String,
    iconClasses: [String, Array]
  },
  methods: {
    ...mapActions([
      'UNSHARE_NOTE',
    ]),
    unshareNote(note_id, title) {   
      Swal.fire({
        title: '공유 해제',
        text: '"' + title + '"의 공유를 해제합니다.',
        // type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-danger btn-fill',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        confirmButtonText: '해제',
        cancelButtonText: '취소',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.UNSHARE_NOTE(note_id);
        }
      });
      this.$amplitude.setUserId(this.user_id);
      this.$amplitude.logEvent('unshareNote');
    },
  }
}
</script>
<style scoped>
</style>