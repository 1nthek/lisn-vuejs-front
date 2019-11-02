<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id">
    <div style="display:flex;flex-basis: auto;">
      <div style="flex: auto;">
        <div class="row">
          <div class="col">
            <slot>
              <span class="font-weight-bold mb-0 ns-kr" v-if="title">{{title}}</span>
              <div class="mb-0 ns-kr summary">{{summary}}</div>
            </slot>
          </div>
        </div>

        <p class="mt-3 mb-0 text-sm">
          <slot name="footer">
          </slot>
        </p>
      </div>
      <div>
        <div v-if="$slots.icon || icon">
          <slot name="icon">
            <div id="trash" class="icon-shape text-white rounded-circle shadow" @click.stop="deleteNote(note_id, title)" style="cursor: pointer;width: 37px;height: 37px;"
                :class="[`bg-${type}`, iconClasses]">
              <i :class="icon"></i>
            </div>
          </slot>
        </div>
        <div>
          <div id="ellipsis" class="icon-shape rounded-circle" @click.stop="moveDirectory(note_id)" style="cursor: pointer;width: 37px;height: 37px;margin-top: 8px;">
          <i class="fas fa-ellipsis-h"></i>
              <!-- <i :class="icon"></i> -->
            </div>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import Card from './Card.vue';
import Swal from 'sweetalert2';
import axios from 'axios'
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
    iconClasses: [String, Array]
  },
  methods: {
    ...mapActions([
      'DESTROY_NOTE',
      'MOVE_DIRECTORY'
    ]),
    moveDirectory(note_id){
      var directory = {};
      this.directories.forEach(element => {
        directory[element.directory_id] = element.name;
      });
      
      Swal.fire({
        title: '해당 폴더로 이동',
        input: 'select',
        inputOptions: directory,
        inputPlaceholder: '폴더 선택',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        confirmButtonText: '이동',
        cancelButtonText: '취소',
        buttonsStyling: false,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === '') {
              resolve('폴더를 선택해야 합니다')
            } else {
              const directory_id = value;
              this.MOVE_DIRECTORY({note_id, directory_id});
              resolve();
            }
          })
        }
      })
    },
    deleteNote(note_id, title) {   
      Swal.fire({
        // title: '휴지통으로 이동',
        // text: `휴지통에서 완전히 삭제할 수 있습니다`,
        title: '노트 삭제',
        text: '"' + title + '"를 휴지통으로 이동합니다.',
        // type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-danger btn-fill',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.DESTROY_NOTE({note_id, title});
        }
      });
    },
  }
}
</script>
<style>
.summary{
  font-weight:600;font-size: 12px;height: 17px;color: #617386;transition: all .4s ease 0s;
}
#ellipsis:hover{
  background: lightgray;
}
#trash:hover{
  color:lightgray !important;
}
.card-stats .card-body {
    padding: 14px 20px !important; 
}
/* .summary:hover{
    color: rgb(167, 197, 229);
} */
.swal2-content select {
    -moz-appearance: menulist !important;
    -webkit-appearance: menulist !important;
    border-style: solid !important;
}
</style>