<template>
<vuescroll :ops="ops">
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            {{title}}
          </h3>
        </div>
        <div class="create-bar">
          <router-link to="/write">
              <div>
                  <v-btn class="create-btn"><i class="fas fa-plus"></i>&nbsp;&nbsp;New Project</v-btn>
              </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :thead-classes="'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Project</th>
          <th class="align-center">Length</th>
          <th class="align-center">Creator</th>
          <th class="align-center">Created</th>
          <th class="align-center">Last Updated</th>
          <th>Status</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <td scope="row">
            {{row.title}}
          </td>
          <td class="length align-center">
            {{row.length}}
          </td>
          <td class="creator align-center">
            {{row.creator}}
          </td>
          <td class="created align-center">
            {{row.created}}
          </td>
          <td class="last-updated align-center">
            {{row.lastupdated}}
          </td>
          <td>
            <badge class="badge-dot" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{row.status}}</span>
            </badge>
          </td>
          <!-- <td>
            <div class="avatar-group">
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                <img alt="Image placeholder" src="../../../src/img/theme/team-1-800x800.jpg">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                <img alt="Image placeholder" src="../../../src/img/theme/team-2-800x800.jpg">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                <img alt="Image placeholder" src="../../../src/img/theme/team-3-800x800.jpg">
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                <img alt="Image placeholder" src="../../../src/img/theme/team-4-800x800.jpg">
              </a>
            </div>
          </td> -->
          <!-- <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.completion}}%</span>
              <div>
                <base-progress :type="row.statusType"
                               :show-percentage="false"
                               class="pt-0"
                               :value="row.completion"/>
              </div>
            </div>
          </td> -->

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </template>
            </base-dropdown>
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end">
      <base-pagination total="5"></base-pagination>
    </div>

  </div>
  </vuescroll>
</template>
<script>
export default {
  name: 'projects-table',
  props: {
    type: {
      type: String
    },
    title: String
  },
  data () {
    return {
      tableData: [
        {
          // img: require('../../../src/img/theme/bootstrap.jpg'),
          title: '프론트엔드 프레임워크 관련 회의',
          length: '1:02:37',
          status: 'completed',
          statusType: 'success',
          creator: '강인덕',
          created: '2019/07/20',
          lastupdated: '2019/07/20'
        },
        {
          // img: require('../../../src/img/theme/angular.jpg'),
          title: '벡엔드 프레임워크 관련 회의',
          length: '00:05:12',
          status: 'pending',
          statusType: 'warning',
          creator: '이규용',
          created: '2019/07/20',
          lastupdated: '2019/07/20'
        },
        {
          // img: require('../../../src/img/theme/sketch.jpg'),
          title: 'API를 이용한 클라이언트 시나리오',
          length: '01:25:02',
          status: 'completed',
          statusType: 'success',
          creator: '손정연',
          created: '2019/07/20',
          lastupdated: '2019/07/20'
        },
        {
          // img: require('../../../src/img/theme/react.jpg'),
          title: '자기주도학습 관련 회의',
          length: '02:52:54',
          status: 'delayed',
          statusType: 'danger',
          creator: '소오마',
          created: '2019/07/20',
          lastupdated: '2019/07/20'
        },
        {
          // img: require('../../../src/img/theme/vue.jpg'),
          title: '팀 회의비 사용 내역 협의',
          length: '00:42:21',
          status: 'on schedule',
          statusType: 'info',
          creator: '소오마',
          created: '2019/07/20',
          lastupdated: '2019/07/20'
        }
      ]
    }
  }
}
</script>
<style>
.table {
    margin-bottom: 0rem;
}
.align-center{
  text-align: center;
}
.shadow {
    box-shadow: none !important;
}
.card-header:first-child {
    border-radius: 1rem;
}
.card {
    border-radius: 1rem;
    border: none;
}
a:hover {
 text-decoration: none;
}
.create-btn{
    background-color: #1867c0 !important;
    border-color: #1867c0 !important;
    color: #fff !important;
}
.create-btn, .import-btn {
    width: 10rem !important;
    text-transform: none;
}
.create-btn:focus, .import-btn:focus {
    outline: none;
}
.text-light {
    color: darkgrey !important;
}
td:hover{
  cursor: pointer;
}
tr:hover{
  background:bisque;
}
tr{
  transition: all .4s ease 0s;
}
.avatar-group .avatar {
    position: relative;
    z-index: 2;
    border: 2px solid #fff;
}
.avatar-sm {
    width: 36px;
    height: 36px;
    font-size: 0.875rem;
}
.avatar {
    color: #fff;
    background-color: #adb5bd;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: 50%;
    height: 48px;
    width: 48px;
}
.rounded-circle {
    border-radius: 50% !important;
}
a {
    color: #5e72e4;
    text-decoration: none;
    background-color: transparent;
}
.avatar img {
    width: 100%;
    border-radius: 50%;
}
img {
    vertical-align: middle;
    border-style: none;
}

.border-0 {
    border: 0 !important;
}
.card-header {
    padding: 0.7rem 2rem 0.7rem 1.5rem;
    margin-bottom: 0;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.card .table td, .card .table th {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.table .thead-light th {
    background-color: #f6f9fc;
    color: #8898aa;
}
.table.align-items-center td, .table.align-items-center th {
    vertical-align: middle;
}
.table .thead-light th {
    color: #8898aa;
    background-color: #f6f9fc;
    border-color: #e9ecef;
}
.table thead th {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #e9ecef;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #e9ecef;
}
.table-flush td, .table-flush th {
    border-left: 0;
    border-right: 0;
}
.table th, .table td {
    font-size: 0.9rem;
    padding: 1rem;
}
.card-footer:last-child {
    border-radius: 0 0 calc(0.375rem - 1px) calc(0.375rem - 1px);
}
.justify-content-end {
    -webkit-box-pack: end !important;
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
}
.d-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
}
.card-footer {
    padding: 1.25rem 1.5rem;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.pagination {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.375rem;
}
ol, ul, dl {
    margin-top: 0;
    margin-bottom: 1rem;
}
.page-item .page-link, .page-item span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    margin: 0 3px;
    border-radius: 50% !important;
    width: 36px;
    height: 36px;
    font-size: 0.875rem;
}
.page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #8898aa;
    background-color: #fff;
    border: 1px solid #dee2e6;
}
.page-item.disabled .page-link {
    color: #8898aa;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
}
.page-item.active .page-link {
    -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}
.text-sm {
    font-size: 0.9rem !important;
}
.table th {
    font-weight: 600;
}
.avatar-group .avatar + .avatar {
    margin-left: -1rem;
}
.badge-dot {
    font-weight: 400;
    font-size: 0.875rem;
    text-transform: none;
}
</style>
