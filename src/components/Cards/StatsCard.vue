<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id">
    <div style="display:flex;flex-basis: auto;">
      <div style="flex: auto;">
        <div class="row">
          <div class="col ns-kr">
            <slot>
              <div class="card-list-title" v-if="title">{{title}}</div>
              <div class="card-list-summary">{{summary}}</div>
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
          <div id="trash" @click.stop="deleteNote(note_id, title)" style="display: flex;cursor: pointer;width: max-content;">
            <div style="display: flex;align-items: center;justify-content: center;width:30px;font-size: 17px;">
              <i class="fas fa-trash"></i>
            </div>
            <div style="font-weight: bold;font-size: 15px;margin-left: 8px">
              노트 삭제
            </div>
          </div>
          <div id="folder-move" @click.stop="moveDirectory(note_id)" style="display: flex;cursor: pointer;margin-top: 8px;width: max-content;">
            <div style="display: flex;align-items: center;justify-content: center;width:30px;font-size: 18px;">
              <i class="fas fa-sign-in-alt"></i>
            </div>
            <div style="font-weight: bold;font-size: 15px;margin-left: 8px">            
              폴더 이동
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
      this.DESTROY_NOTE({note_id, title});
      // Swal.fire({
      //   // title: '휴지통으로 이동',
      //   // text: `휴지통에서 완전히 삭제할 수 있습니다`,
      //   title: '노트 삭제',
      //   text: '"' + title + '"를 휴지통으로 이동합니다.',
      //   // type: 'warning',
      //   showCancelButton: true,
      //   confirmButtonClass: 'btn btn-danger btn-fill',
      //   cancelButtonClass: 'btn btn-secondary btn-fill',
      //   confirmButtonText: '삭제',
      //   cancelButtonText: '취소',
      //   buttonsStyling: false
      // }).then(result => {
      //   if (result.value) {
      //     this.DESTROY_NOTE({note_id, title});
      //   }
      // });
    },
  }
}
</script>
<style scoped>
.card-list-summary{
  font-weight: bold;
  width: 450px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #617386;
  margin-bottom: 10px;
}
.card-list-title{
  font-weight: bold;
  width: 450px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}
@media ( max-width: 1599.98px ) {
  .card-list-title, .card-list-summary{
    width: 280px;
  }
}
@media ( max-width: 1199.98px ) {
  .card-list-title, .card-list-summary{
    width: 280px;
  }
}
@media (max-width: 991.98px){
  .card-list-title, .card-list-summary{
      width: 24vw;
  }
}
@media ( max-width: 767px ) {
  .card-list-title, .card-list-summary{
    width: 46vw;
  }
}
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