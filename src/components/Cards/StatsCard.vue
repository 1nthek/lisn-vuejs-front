<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id" v-on:openNote="$emit('openNote')">
    <div style="display:flex;flex-basis: auto;">
      <div style="flex: auto;">
        <div class="row">
          <div class="col">
            <slot>
              <span class="font-weight-bold mb-0 ns-kr" v-if="title">{{title}}</span>
              <div class="mb-0 ns-kr summery">{{summery}}</div>
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
            <div id="trash" class="icon-shape text-white rounded-circle shadow" @click.stop="handleDelete(note_id, title)" style="cursor: pointer;width: 37px;height: 37px;"
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
    moveDirectory(note_id){
      var directory = {};
      for (var i = 0; i < this.$store.state.directories.length; i++) {
        directory[this.$store.state.directories[i].directory_id] = this.$store.state.directories[i].name;
      }
      
      Swal.fire({
        title: '해당 폴더로 이동',
        input: 'select',
        inputOptions: directory,
        inputPlaceholder: '폴더 선택',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === '') {
              resolve('폴더를 선택해야 합니다')
            } else {
              this.moveDirectoryAPI(note_id, value);
              resolve();
            }
          })
        }
      })
    },
    moveDirectoryAPI(note_id, directory_id){
      let self = this;
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append('note_id', note_id);
      formData.append('directory_id', directory_id);
      xhr.open('PUT', this.$store.state.domain + '/note/directory');
      xhr.send(formData);
      xhr.onload = function() {
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 1600,
          type: 'success',
          title: '폴더가 이동 되었습니다.'
        })
        if(self.$store.state.directory_id==-1){
          
        }else{
          self.$store.commit('getDirectoryNoteList', self.$store.state.directory_id);
        }
      }

    },
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
<style>
/* .icon.icon-shape {
  transition: background 300ms ease-in 0s;
}
.icon.icon-shape:hover {
  background: #fb6340 !important;
} */
.summery{
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
/* .summery:hover{
    color: rgb(167, 197, 229);
} */
.swal2-content select {
    -moz-appearance: menulist !important;
    -webkit-appearance: menulist !important;
    border-style: solid !important;
}
</style>