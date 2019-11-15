<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id">
    <div style="display:flex;flex-basis: auto;">
      <div style="flex: auto;">
        <div class="row">
          <div class="col ns-kr">
            <slot>
              <div style="display:flex">
                <div v-if="color==-1" class="lisn-flag color-0" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==0" class="lisn-flag color-1" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==1" class="lisn-flag color-2" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==2" class="lisn-flag color-3" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==3" class="lisn-flag color-4" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==4" class="lisn-flag color-5" @click.stop="moveDirectory(note_id)"></div>
                <div v-if="color==5" class="lisn-flag color-6" @click.stop="moveDirectory(note_id)"></div>
                <div class="card-list-title" v-if="title">{{title}}</div>
              </div>
              <div class="card-list-summary" v-html="summary"></div>
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
    color: Number,
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
.lisn-flag{
  border-radius: 2px;
  background-color: transparent; 
  padding: 0px; 
  margin-top: -15px;
  margin-right: 12px;
  height: 44px;
  width: 0px;
  border-width: 0px 8px 8px;
  border-style: solid;
}
.color-0{
  border-color: #aaaaaa #aaaaaa transparent;
}
.color-1{
  border-color: #FF0033 #FF0033 transparent;
}
.color-2{
  border-color: #FF7700 #FF7700 transparent;
}
.color-3{
  border-color: #F0CA36 #F0CA36 transparent;
}
.color-4{
  border-color: #AADD22 #AADD22 transparent;
}
.color-5{
  border-color: #0088FF #0088FF transparent;
}
.color-6{
  border-color: #9911AA #9911AA transparent;
}
.card-list-summary{
  font-weight: bold;
  width: 450px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #617386;
  height: 32px;
  margin-top: 2px;
}
.card-list-title{
  font-weight: bold;
  width: 410px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}
@media ( max-width: 1599.98px ) {
  .card-list-title, .card-list-summary{
    width: 220px;
  }
}
@media ( max-width: 1199.98px ) {
  .card-list-title, .card-list-summary{
    width: 240px;
  }
}
@media (max-width: 991.98px){
  .card-list-title, .card-list-summary{
      width: 20vw;
  }
}
@media ( max-width: 767px ) {
  .card-list-title, .card-list-summary{
    width: 40vw;
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