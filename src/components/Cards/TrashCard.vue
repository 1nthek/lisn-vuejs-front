<template>
  <card class="card-stats" :show-footer-line="true" :note_id="note_id">
    <div style="display:flex;flex-basis: auto;">
      <div style="flex: auto;">
        <div class="row">
          <div class="col ns-kr">
            <slot>
              <div class="trash-card-title" v-if="title">{{title}}</div>
              <div class="trash-card-summary">{{summary}}</div>
            </slot>
          </div>
        </div>
      </div>
      <div class="note-date ns-kr" style="font-weight: bold;color:#666666;font-size: 13px;display: flex;">
            <!-- <div class="text-nowrap mr-5"> {{ updated_at }} </div> -->
      <div class="text-nowrap" v-html="created_at"></div>
    </div>
    </div>
  </card>
</template>
<script>
import Card from './Card.vue';
import Swal from 'sweetalert2';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'trash-card',
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
      
    ]),
    
  }
}
</script>
<style scoped>
.trash-card-summary{
  font-weight: bold;
  width: 1080px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  height: 17px;
  color: #617386;
  margin-bottom: 14px;
}
.trash-card-title{
  font-weight: bold;
  width: 1080px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}
@media ( max-width: 1599.98px ) {
  .trash-card-title, .trash-card-summary{
    width: 950px;
  }
}
@media ( max-width: 1399.98px ) {
  .trash-card-title, .trash-card-summary{
    width: 700px;
  }
}
@media ( max-width: 1199.98px ) {
  .trash-card-title, .trash-card-summary{
    width: 580px;
  }
}
@media (max-width: 991.98px){
    .trash-card-title, .trash-card-summary{
    width: 380px;
  }
}
@media ( max-width: 767px ) {
  .trash-card-title, .trash-card-summary{
    width: 240px;
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