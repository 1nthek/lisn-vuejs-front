<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id">
    <div class="row">
      <div class="col">
        <slot>
          <span class="font-weight-bold mb-0 ns-kr" v-if="title">{{title}}</span>
          <h5 class="mb-0 ns-kr" v-if="subTitle">{{subTitle}}</h5>
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
import swal from 'sweetalert2';
import { noteList } from '../../api/api.js'

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
    subTitle: String,
    iconClasses: [String, Array]
  },
  methods: {
    handleDelete(note_id, title) {  //index from 0, 해당 row의 json객체      
      swal.fire({
        title: '휴지통으로 이동',
        text: `휴지통에서 완전히 삭제할 수 있습니다`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-danger btn-fill',
        confirmButtonText: '삭제!',
        cancelButtonText: '취소',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteRow(note_id);
          swal.fire({
            title: '삭제!',
            text: `You deleted ${title}`,
            type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false
          });
        }
      });
    },
    deleteRow(note_id) {
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append('note_id', note_id);
      xhr.open('DELETE', 'http://localhost:8000/record/note');
      xhr.send(formData);

      this.$store.commit('setUserId', 'glisn_user_id');
      this.user_id = this.$store.state.user_id;
      this.$store.commit('getNoteList');
    }
  }
}
</script>
<style scoped>

</style>