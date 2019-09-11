<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id" v-on:openNote="$emit('openNote')">
    <div class="row">
      <div class="col">
        <slot>
          <span class="font-weight-bold mb-0 ns-kr" v-if="title">{{title}}</span>
          <div class="mb-0 ns-kr summery">{{summery}}</div>
        </slot>
      </div>

      <div class="col-auto" v-if="$slots.icon || icon">
        <slot name="icon">
          <div class="icon icon-shape text-white rounded-circle shadow" @click.stop="handleDelete(note_id, title)" style="cursor: pointer;"
               :class="[`bg-${type}`, iconClasses]">
            <i :class="icon"></i>
          </div>
        </slot>
      </div>
    </div>

    <p class="mt-3 mb-0 text-sm">
      <slot name="footer">
      </slot>
    </p>
  </card>
</template>
<script>
import Card from './Card.vue';
import Swal from 'sweetalert2';
import axios from 'axios'

export default {
  name: 'stats-card',
  components: {
    Card
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    icon: String,
    note_id: "",
    title: String,
    summery: String,
    iconClasses: [String, Array]
  },
  methods: {
    handleDelete(note_id, title) {   
      Swal.fire({
        title: '휴지통으로 이동',
        text: `휴지통에서 완전히 삭제할 수 있습니다`,
        // type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-danger btn-fill',
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteRow(note_id, title);
        }
      });
    },
    deleteRow(note_id, title) {
      let self = this;
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append('note_id', note_id);
      xhr.open('DELETE', this.$store.state.domain + '/note');
      xhr.send(formData);
      xhr.onload = function() {
        if(xhr.status == 200){
          Swal.fire({
            title: '삭제',
            text: `노트 '${title}'를 삭제 하였습니다.`,
            type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false
          });
          self.$store.commit('getNoteList');
        }
        else{
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            type: 'error',
            title: '노트 삭제 실패',
          });
        }
      }
    }
  }
}
</script>
<style scoped>
/* .icon.icon-shape {
  transition: background 300ms ease-in 0s;
}
.icon.icon-shape:hover {
  background: #fb6340 !important;
} */
.summery{
  font-weight:600;font-size: 12px;height: 17px;color: #617386;transition: all .4s ease 0s;
}

/* .summery:hover{
    color: rgb(167, 197, 229);
} */
</style>