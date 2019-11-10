<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id">
    <div style="display:flex;flex-basis: auto;">
      <div style="flex: auto;">
        <div class="row">
          <div class="col ns-kr">
            <slot>
              <div class="card-title" v-if="title">{{title}}</div>
              <div class="card-summary">{{summary}}</div>
            </slot>
          </div>
        </div>

        <div class="note-date ns-kr" style="font-weight: bold;color:#666666;font-size: 13px;display: flex;">
            <!-- <div class="text-nowrap mr-5"> {{ updated_at }} </div> -->
            <div class="text-nowrap" v-html="created_at"></div>
        </div>
      </div>
      <div style="display: flex;align-items: center;margin-right: 10px;color:darkgray">
        <div class="ns-kr cont3">
          <div id="trash" @click.stop="unshareNote(note_id, title)" style="display: flex;cursor: pointer;width: max-content;">
            <div style="display: flex;align-items: center;justify-content: center;width:30px;font-size: 17px;">
              <i class="fas fa-trash"></i>
            </div>
            <div style="font-weight: bold;font-size: 15px;margin-left: 8px">
              공유 해제
            </div>
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
    },
  }
}
</script>
<style>
.card-summary{
  font-weight: bold;
  width: 450px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  height: 17px;
  color: #617386;
  margin-bottom: 14px;
}
.card-title{
  font-weight: bold;
  width: 450px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}
@media ( max-width: 1599.98px ) {
  .card-title, .card-summary{
    width: 280px;
  }
}
@media ( max-width: 1199.98px ) {
  .card-title, .card-summary{
    width: 280px;
  }
}
@media (max-width: 991.98px){
    .card-title, .card-summary{
    width: 190px;
  }
}
@media ( max-width: 767px ) {
  .card-title, .card-summary{
    width: 280px;
  }
}
/* #noteList:hover .cont3{
  color: darkgray;
} */
.summary{
  font-weight:600;
  font-size: 14px;
  height: 17px;
  color: #617386;
}
#folder-move, #trash{
  transition: all 200ms ease-in 0s;
}
#folder-move:hover, #trash:hover{
  /* transform: translateX(2px); */
  color: black;
}
.card-stats .card-body {
    padding: 14px 20px !important; 
}
.swal2-content select {
    border-style: solid !important;
}
</style>