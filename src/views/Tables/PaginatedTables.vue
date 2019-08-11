<template>
  <card body-classes="px-0 pb-0" footer-classes="pb-2">
    <template slot="header">
      <div class="oleo" style="margin: 1.4rem 0 0 2rem;font-size: 26px;color:#3e4861">All Notes</div>
      <div class="create-bar">
        <!-- <router-link to="/write"> -->
          <md-button class="create-btn merienda" @click="newPage()">
            <div style="padding: 10px;">
              + New Project
            </div>
              </md-button>
          <!-- <i class="fas fa-plus"></i> -->
        <!-- </router-link> -->
      </div>
    </template>
    <div>
      <div class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
        <el-select
          class="select-primary pagination-select" style="border-right: 2px solid white; max-width: 200px;"
          v-model="pagination.perPage"
          placeholder="Per page">
          <el-option class="select-primary" v-for="item in pagination.perPageOptions"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>

        <div style="max-width: 300px;">
          <base-input v-model="searchQuery" prepend-icon="fas fa-search" placeholder="Search...">
          </base-input>
        </div>
      </div>
      <!-- table -->
      <el-table :data="queriedData" row-key="id" header-row-class-name="thead-light" :show-header="false"
                @sort-change="sortChange" style="background: aliceblue;border-right: 2px solid white;"
                @selection-change="selectionChange">
        <el-table-column
          v-for="column in tableColumns"
          :key="column.label" align="center"
          v-bind="column">
        </el-table-column>
        <el-table-column min-width="60px" align="center" label="Delete">
          <div slot-scope="{$index, row}">
            <i class="fas fa-trash-alt" @click="handleDelete($index, row)" style="font-size: 17px;"></i>
          </div>
        </el-table-column>
      </el-table>
    </div>
    <div class="heoo"></div>
    <div slot="footer" class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
      <div class="flex-con">
        <p class="card-category">{{ from + 1 }} to {{ to }} of {{ total }} entries
          <span v-if="selectedRows.length">
            &nbsp; &nbsp; {{selectedRows.length}} rows selected
          </span>
        </p>
      </div>
      <div class="flex-con" style="display: flex;align-items: center;justify-content: center;">
        <base-pagination
          class="pagination-no-border"
          v-model="pagination.currentPage"
          :per-page="pagination.perPage"
          :total="total">
        </base-pagination>
      </div>
      <div class="flex-con"></div>
    </div>
  </card>
</template>
<script>
// import { Table, TableColumn, Select, Option } from 'element-ui';
// import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb'
// import { BasePagination } from '@/components';
import clientPaginationMixin from './PaginatedTables/clientPaginationMixin'
import swal from 'sweetalert2';
// import users from './users2';
import { noteList } from '../../api/api.js'
import axios from 'axios'


export default {
  mixins: [clientPaginationMixin],
  components: {
    // BasePagination,
    // RouteBreadCrumb,
    // [Select.name]: Select,
    // [Option.name]: Option,
    // [Table.name]: Table,
    // [TableColumn.name]: TableColumn
  },
  created() {
    myList.fetch(this.$store.state.user_id)
      .then(data => {
        this.tableData = data
      })
  },
  data() {
    return {
      propsToSearch: ['name', 'email', 'age'],
      tableColumns: [
        {
          type: 'selection'
        },
        {
          prop: 'title',
          label: 'Title',
          minWidth: 220,
          sortable: true
        },
        // {
        //   prop: 'length',
        //   label: 'Length',
        //   minWidth: 100,
        //   sortable: true
        // },
        // {
        //   prop: 'creator',
        //   label: 'Creator',
        //   minWidth: 100,
        //   sortable: true
        // },
        {
          prop: 'created_at',
          label: ' Created',
          minWidth: 100,
          sortable: true
        },
        {
          prop: 'updated_at',
          label: 'Last Updated',
          minWidth: 100,
          sortable: true
        }
      ],
      tableData: [],
      selectedRows: []
    };
  },
  methods: {
    newPage(){
      var formData = new FormData();
      formData.append('user_id', '1');
      axios.post('http://localhost:8000/record/note', formData)
        .then((res) => { 
          console.log('성공');
          this.$store.state.note_id = res.data.note_id;
          this.$router.push('/write');
          myList.fetch(this.$store.state.user_id)
            .then(data => {
              this.tableData = data
            })
         })
        .catch((ex) => { 
          console.log('실패'); 
        });
    },
    handleDelete(index, row) {  //index from 0, 해당 row의 json객체      
      swal.fire({
        title: 'Are you sure?',
        text: `You won't be able to revert this!`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-danger btn-fill',
        confirmButtonText: 'Yes, delete it!',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteRow(row);
          swal.fire({
            title: 'Deleted!',
            text: `You deleted ${row.name}`,
            type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false
          });
        }
      });
    },
    deleteRow(row) {
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append('note_id', row.note_id);
      xhr.open('DELETE', 'http://localhost:8000/record/note');
      xhr.send(formData);

      console.log('성공', this.$store.state.user_id);
      myList.fetch(this.$store.state.user_id)
        .then(data => {
          this.tableData = data
        })

      // var formData = new FormData();
      // formData.append('note_id', '20');

      // // for (var key of formData.keys()) {
      // //   console.log(key);
      // // }
      // // for (var value of formData.values()) {
      // //   console.log(value);
      // // }
      // axios.delete('http://localhost:8000/record/note', {data: {
      //   'note_id': '20'
      // }})
      //   .then((res) => { 
      //     console.log('성공');
      //    })
      //   .catch((ex) => { 
      //     console.log('실패'); 
      //     console.log(formData); 
      //   });
      // myList.destroy(row.note_id)
      //   .then(data => {
      //     this.tableData = data
      //   })
      
      // let indexToDelete = this.tableData.findIndex(
      //   tableRow => tableRow.id === row.id
      // );
      // if (indexToDelete >= 0) {
      //   this.tableData.splice(indexToDelete, 1);
      // }
    },
    selectionChange(selectedRows) {
      this.selectedRows = selectedRows
    }
  }
};
</script>
<style>
.el-table_1_column_2>div{
  justify-content: left !important;
}
.el-table_1_column_1, .el-table_1_column_2{
  text-align: left !important;
}
button:focus {
    outline: none;
}
.el-table .el-table__header-wrapper thead th .cell {
  display: flex;
  align-items: center;
  justify-content: center;
}
.md-button.create-btn:hover {
    /* box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2); */
    /* box-shadow: 0 14px 26px -12px rgba(54, 82, 244, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(54, 89, 244, 0.2); */
    background-color: #0050ac  !important;
}

.flex-con{
  flex: 1 !important;
}
.el-table td:hover{
  cursor: pointer;
  /* eee9f1 */
}
.el-table tr:hover{
  /* background:bisque; */
    color: rgba(0, 0, 0, 0.8);
    background: hsla(0,0%,100%,.3) !important;
}
.el-table tr{
  transition: all 0.4s ease 0s;
  background: #fff !important;
}
.el-table thead th {
    font-size: 10px;
}
.el-table td {
    color: #0f255c;
    font-size: 14px;
    font-family: 'Nanum Barun Gothic', sans-serif;
}
.el-table .sort-caret.ascending {
    border-bottom-color: #C0C4CC;
  }
  .el-table .sort-caret.descending {
    border-top-color: #C0C4CC;
}
.card-header:first-child {
    border-radius: 0.8rem;
}
.card-footer:last-child {
    border-radius: 0.8rem;
}
.card {
    border-radius: 0.8rem;
    border: none;
    box-shadow: none;
}
.card-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
}
.create-bar{
    padding: 0.7rem 2rem 0.7rem 1.5rem;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.create-btn{
    background-color: #1867c0 !important;
    border-color: #1867c0 !important;
    color: #fff !important;
    padding: 0px;
    margin: 6px 10px;
    border-radius: 0.2rem;
    font-family: 'Cabin', sans-serif;
}
</style>
