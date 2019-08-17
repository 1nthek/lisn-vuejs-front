<template>
<div class="lisn-home-comp">
        <div class="notes-container" style="margin-bottom:30px">
            <div style="padding: 0;display: flex;justify-content: space-between;align-items: center;">
              <div class="ns-kr" style="margin: 0 20px;font-size: 24px;color:#3e4861;font-weight: bold;">모든 노트</div>
              <div class="create-bar">
                  <button class="create-btn" @click="newPage()">
                    <div class="ns-kr" style="font-size: 16px;margin: 8px 20px;">
                      + 새 노트
                    </div>
                  </button>
              </div>
            </div>
        </div>
  <div class="row">
    <div class="col-xl-3 col-md-6"  v-for="p in this.$store.state.noteList" :key="p.no">
      <stats-card :title="p.title"
                  :note_id="p.note_id"
                  :summery="p.summery"
                  type="gradient-orange"
                  id="noteList"
                  icon="fas fa-trash">

        <template slot="footer">
          <div class="note-date ns-kr" style="font-weight: bold;">
            <span class="text-nowrap mr-5"><i class="fas fa-upload"></i> &nbsp; {{ p.updated_at }} </span>
            <span class="text-nowrap">{{ p.created_at }}</span>
          </div>
        </template>
      </stats-card>
    </div>
  </div>
</div>
</template>