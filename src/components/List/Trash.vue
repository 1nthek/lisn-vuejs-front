<template>
   <div>
        <div style="margin-bottom:30px;width: 100%;background: white;">
            <div style="padding: 0 15px;display: flex;justify-content: space-between;align-items: center;height: 40px;">
                <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:#3e4861;font-weight: bold;">휴지통</div>
            </div>
        </div>
        <div v-if="isLoading" class="cont-isLoading" >
            <div class="list-isLoading"></div>
        </div>
        <div v-else class="row" style="margin:0" ref="contents">
        <table class="row" style="margin:0" ref="contents">
            <tr class="deleted_conversation" style="padding: 0 15px; margin: 0 20px;">
            <th>
                <input type="checkbox" id="main-checkbox" v-model="selectAll" class="mat-checkbox" @click="allSelected()">
                <button class="deleted_conversation_button" @click="deleteNote()">
                <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;font-weight: bold" >
                    영구 삭제
                </div>
                </button>
                <button class="deleted_conversation_button" @click="restoreNote()">
                <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;font-weight: bold" >
                    복구
                </div>
                </button>
            </th>
            </tr>
            <tr class="card-list"  v-for="p in noteList" :key="p.no" >
            <input type="checkbox" :value="p.note_id" v-model="selected" class="mat-checkbox" @click="select()">
            
            <div class="trash-list">
                <div class="trash-title">
                {{ p.title}}
                </div>
                <div class="trash-summary">
                {{ p.summary }}
                </div>
                <div class="trash-bottom">
                {{ p.created_at}}
                </div>
                
            </div>
                
            </tr>
        </table>
        </div>
   </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { setTokenInHeader } from '../../api/api.js'

export default {
  data() {
    return {
      isLoading: true,
      selected: [],
      selectAll: false
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
      'FETCH_TRASH_LISTS',
      'CREATE_NOTE',
      'RESTORE_NOTE',
      'TRASH_NOTE',
    ]),
    async fetch(){
      await this.FETCH_TRASH_LISTS()
      this.isLoading = false;
    },
    select(){
      this.selectAll = false;
    },
    allSelected(){
      this.selected = [];
      if (!this.selectAll) {
          for (let p in this.noteList) {
              this.selected.push(this.noteList[p].note_id);
          }
      }
    },
    restoreNote() {
     for(let item in this.selected){
       this.RESTORE_NOTE(this.selected[item]);
     }
    },
    deleteNote() {
      Swal.fire({
        title: '노트 삭제',
        text: '노트를 영구 삭제합니다.',
        // type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-danger btn-fill',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          for(let item in this.selected){
            this.TRASH_NOTE(this.selected[item]);
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.deleted_conversation {
    width: 100%;
}
.deleted_conversation_button {
    color: #f1404b;
    border: .1rem solid #f1404b;
    box-sizing: border-box;
    position: relative;
    user-select: none;
    cursor: pointer;
    outline: 0;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin-right: 1rem;
    border-radius: 4px;
    overflow: visible;
}
.mat-checkbox {
  margin: .4rem 1.6rem .4rem;
  display: inline-block;
  height: 16px;
  line-height: 0;
  order: 0;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  width: 16px;
  flex-shrink: 0;
}
.card-list {
    padding: 0 15px; 
    margin: 20px 20px 0px 20px;
    border-top: .1rem solid #adadad;
    border-bottom: .1rem solid #adadad;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    min-height: 3.8rem;
    width:100%;
}
.trash-summary {
  font-weight:600;
  font-size: 14px;
  height: 17px;
  color: #617386;
  transition: all .4s ease 0s;
  margin-top: .2rem;
}
.trash-list {
    width:flex;
    margin:8px;
}
.trash-title {
  font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.trash-bottom {
  font-size: 1rem;
  margin-top: .4rem;
}
</style>

