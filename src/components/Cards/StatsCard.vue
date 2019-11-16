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
              <div class="card-list-summary" v-html="summary"></div>
            </slot>
          </div>
        </div>

        <div class="note-date ns-kr" style="font-weight: bold;color:#666666;font-size: 13px;display: flex;display: flex;align-items: center;">
            <div class="text-nowrap" v-html="created_at"></div>
            <div v-if="is_shared" class="lisn-badge ns-kr"><i class="fas fa-share"></i>&nbsp;공유&nbsp;{{num_of_share+1}}</div>
        </div>
      </div>
      <div style="display: flex;align-items: center;margin-right: 10px;color:darkgray">
        <div class="ns-kr cont3" style="display: flex;">
          <div id="folder-move" @click.stop="moveDirectory(note_id)" class="card-icon-cont">
              <i class="fas fa-folder"></i>
          </div>
          <div id="trash" @click.stop="deleteNote(note_id, title)" class="card-icon-cont" style="margin-left: 4px;">
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
    is_shared: String,
    updated_at: String,
    created_at: String,
    iconClasses: [String, Array]
  },
  methods: {
    ...mapActions([
      'DESTROY_NOTE',
      'MOVE_DIRECTORY',
      'FETCH_LISTS',
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
          return new Promise(async(resolve) => {
            if (value === '') {
              resolve('폴더를 선택해야 합니다')
            } else {
              const directory_id = value
              await this.MOVE_DIRECTORY({note_id, directory_id})

              if(this.$route.name == "allNotes"){
                await this.FETCH_LISTS();
              }
              // else if(this.$route.name == "sharedNotes"){
              //   this.FETCH_SHARED_LISTS();
              // }
              else if(this.$route.name == "directory"){
                const directory_id = this.$route.params.fid
                const directory_name = this.$route.params.name
                await this.FETCH_DIRECTORY_LISTS({directory_id, directory_name})
              }
              resolve()
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
</style>