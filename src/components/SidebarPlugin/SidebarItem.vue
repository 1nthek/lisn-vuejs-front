<template>
  <component
    :is="baseComponent"
    :to="link.path ? link.path : '/'"
    class="nav-item"
    tag="li">
    <div v-if="isMenu">    <!-- root directory -->
      <div class="cont1">
        <div>
          <i :class="link.icon" style="min-width: 2rem;"></i>
          <span class="nav-link-text">{{ link.name }} <b class="caret"></b></span>
        </div>
        <div id="add-folder-btn" @click.stop="addFolder()">
          <i class="fas fa-plus" style="font-size: 16px;"></i>
        </div>
      </div>
    </div>

    <collapse-transition>
      <div
        v-if="$slots.default || this.isMenu"
        class="collapse show">
        <ul class="nav nav-sm flex-column">
          <slot></slot>
        </ul>
      </div>
    </collapse-transition>

    <slot
      name="title" 
      v-if="children.length === 0 && !$slots.default && link.path">
      <component
      style="padding:0"
        :to="link.path" 
        :is="elementType(link, false)"
        class="nav-link"
        :target="link.target"
        :href="link.path">
        <template v-if="addLink" >   <!-- each directory -->
          <div id="folder-cont" style="display: flex;align-items: center;justify-content:space-between;width: 100%;"  >
            <div style="display: flex;align-items: center;justify-content:space-between;width: 100%;padding:4px 20px 4px 32px;height: 32px;" @click.self="menu_clicked()">
              <div style="padding-left: 30px;display:flex;align-items: center;justify-content: center;" @click.self="menu_clicked()">
                <div v-if="showColors" style="display:flex;z-index: 1061;cursor: default;">
                  <div class="color-palette-cont">
                    <div class="color-palette" style="background: #FF0033;" @click.prevent="changeColor(0), showColors = false"></div>
                  </div>
                  <div class="color-palette-cont">
                   <div class="color-palette" style="background: #FF7700;" @click.prevent="changeColor(1), showColors = false"></div>
                  </div>
                  <div class="color-palette-cont">
                    <div class="color-palette" style="background: #F0CA36;" @click.prevent="changeColor(2), showColors = false"></div>
                  </div>
                  <div class="color-palette-cont">
                    <div class="color-palette" style="background: #AADD22;" @click.prevent="changeColor(3), showColors = false"></div>
                  </div>
                  <div class="color-palette-cont">
                    <div class="color-palette" style="background: #0088FF;" @click.prevent="changeColor(4), showColors = false"></div>
                  </div>
                  <div class="color-palette-cont">
                   <div class="color-palette" style="background: #9911AA;" @click.prevent="changeColor(5), showColors = false"></div>
                  </div>
                </div>
                <div v-if="showColors" style="background: rgba(0, 0, 0, 0.6);position: fixed;z-index: 1060;top: 0;right: 0;bottom: 0;left: 0;cursor: default; transition: all 100ms ease-in 0s;" @click.prevent="showColors = false"></div>
                <div class="folder-color-cont" v-if="!showColors" @click.prevent="showColors = true">
                    <div v-if="directory_color==0" class="folder-color color-0"></div>
                    <div v-if="directory_color==1" class="folder-color color-1"></div>
                    <div v-if="directory_color==2" class="folder-color color-2"></div>
                    <div v-if="directory_color==3" class="folder-color color-3"></div>
                    <div v-if="directory_color==4" class="folder-color color-4"></div>
                    <div v-if="directory_color==5" class="folder-color color-5"></div>
                    <div v-if="directory_color==6" class="folder-color color-6"></div>
                </div>
                <div v-if="!showColors" class="nav-link-text" style="margin-left: 4px;" @click.self="menu_clicked()" >{{ link.name }}</div>            
              </div>
              <div v-if="!showColors" style="font-size: 14px;display: flex;">
                <div class="modify-folder-btn" @click.prevent="renameFolder()">
                  <i class="fas fa-edit" @click.prevent="renameFolder()" style="margin-left: 2px;"></i>
                </div>
                <div class="modify-folder-btn" @click.prevent="deleteFolder()">
                  <i class="fas fa-trash" @click.prevent="deleteFolder()"></i>
                </div>
              </div>
            </div>
          </div>
        </template>
        
        <template v-else>   <!-- if not directory -->
            <div class="cont2" @click.self="menu_clicked()">
              <i :class="link.icon" @click.self="menu_clicked()"></i>
              <span class="nav-link-text" style="padding-left: 18px;" @click.self="menu_clicked()">{{ link.name }}</span>
            </div>
        </template>
      </component>
    </slot>
  </component>
</template>
<script>

import { CollapseTransition } from 'vue2-transitions';
import axios from 'axios'
import Swal from 'sweetalert2';
import { mapState, mapMutations, mapActions } from 'vuex'


export default {
  name: 'sidebar-item',
  components: {
    CollapseTransition
  },
  props: {
    menu: {
      type: Boolean,
      default: false,
      description:
        "Whether the item is a menu. Most of the item it's not used and should be used only if you want to override the default behavior."
    },
    link: {
      type: Object,
      default: () => {
        return {
          name: '',
          path: '',
          children: []
        };
      },
      description:
        'Sidebar link. Can contain name, path, icon and other attributes. See examples for more info'
    },
    directory_id:{
      type: Number,
      default: -1,
    },
    directory_name:{
      type: String,
      default: "null",
    },
    directory_color:{
      type: Number,
      default: -1,
    },
  },
  provide() {
    return {
      addLink: this.addChild,
    };
  },
  inject: {
    addLink: { default: null },
    autoClose: {
      default: true
    }
  },
  data() {
    return {
      children: [],
      collapsed: false,
      folderModify: false,
      showColors: false,
      // visibility: 'collapse',
    };
  },
  computed: {
    ...mapState([
      'user_id',
    ]),
  },
  computed: {
    baseComponent() {
      return this.isMenu || this.link.isRoute ? 'li' : 'router-link';
    },
    linkPrefix() {
      if (this.link.name) {
        let words = this.link.name.split(' ');
        return words.map(word => word.substring(0, 1)).join('');
      }
    },
    isMenu() {
      return this.children.length > 0 || this.menu === true;
    },
  },
  methods: {
    ...mapMutations([
    ]),
    ...mapActions([
      'CREATE_DIRECTORY',
      'UPDATE_DIRECTORY',
      'DESTROY_DIRECTORY',
      'UPDATE_DIRECTORY_COLOR',
      'FETCH_DIRECTORIES',
      'FETCH_LISTS',
      'FETCH_SHARED_LISTS',
      'FETCH_DIRECTORY_LISTS',
    ]),
    menu_clicked(){
      let docClasses = document.body.classList
      docClasses.remove('g-sidenav-open');
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    async changeColor(color){
      const directory_id = this.directory_id
      await this.UPDATE_DIRECTORY_COLOR({directory_id, color})
      await this.FETCH_DIRECTORIES()
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
    },
    addFolder(){
      this.CREATE_DIRECTORY();
    },
    deleteFolder(){
      Swal.fire({
        title: '폴더 삭제',
        text: '포함된 노트는 삭제 되지 않습니다.',
        // type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-danger btn-fill',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        buttonsStyling: false
      }).then(async(result) => {
        if (result.value) {
          await this.DESTROY_DIRECTORY(this.directory_id)
          let cur_path = this.$route.path.split('/');
          if(cur_path[2] == this.directory_id){
            this.$router.replace('/allNotes');
          }
        }
      });
    },
    renameFolder(){
      Swal.fire({
        title: '변경할 폴더 이름',
        input: 'text',
        inputValue: this.directory_name,
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        confirmButtonText: '변경',
        cancelButtonText: '취소',
        buttonsStyling: false,
        inputValidator: (value) => {
          if (!value) {
            return '폴더명을 작성해 합니다.'
          }
          else{
            const directory_id = this.directory_id;
            const directory_name = value;
            this.UPDATE_DIRECTORY({directory_id, directory_name});
          }
        }
      })
    },
    addChild(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      this.children.splice(index, 0, item);
    },
    removeChild(item) {
      const tabs = this.children;
      const index = tabs.indexOf(item);
      tabs.splice(index, 1);
    },
    elementType(link, isParent = true) {
      if (link.isRoute === false) {
        return isParent ? 'li' : 'a';
      } else {
        return 'router-link';
      }
    },
    linkClick() {
      this.$emit('closeNote')
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
  mounted() {
    if (this.addLink) {
      this.addLink(this);
    }
  },
};
</script>
<style>
.folder-color-cont{
  width: 16px;
  height: 32px;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.folder-color{
  width: 12px;
  height: 12px;
  border-radius: 100%;
  margin-top: 2px;
  cursor: pointer;
  transition: all 50ms ease-in 0s;
}
.folder-color:hover{
  width: 13px;
  height: 13px;
}
.color-palette-cont{
  width: 16px;
  height: 14px;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-palette{
  width: 12px;
  height: 12px;
  border-radius: 100%;
  margin-top: 2px;
  cursor: pointer;
  transition: all 50ms ease-in 0s;
}
.color-palette:hover{
  width: 14px;
  height: 14px;
}
.router-link-active{
  background: #cecece;
}
.fold-icon{
  transition: all 200ms ease-in 0s;
}
.fold-icon:hover{
  background: lightgray;
}
.sidebar-menu-item {
  cursor: pointer;
}
.sidebar-menu-item,.nav-link{
  /* color: rgba(0, 0, 0, 0.6)  */
  color: #303133 !important;
}

#add-folder-btn,.modify-folder-btn{
  transition: all 200ms ease-in 0s;
  display: flex;
  align-items: center;
  justify-content:center;
  width: 20px;
  height: 20px;
  border-radius: 2px;
}
@media(hover: hover) and (pointer: fine) {
  .modify-folder-btn{
    /* visibility:hidden; */
    opacity:0
  }
  #folder-cont:hover .modify-folder-btn{
    /* visibility: visible !important; */
    opacity:1 !important;
  }
  .nav-item:hover #add-folder-btn{
    /* visibility: visible !important; */
    opacity:1 !important;
  }
}
#add-folder-btn{
  border: 1px solid rgba(55, 53, 57, 0.15);
  margin-right: 4px;
}
.cont1, .cont2{
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 32px;
  color: #303133;
  transition: all 300ms ease-in 0s;
}
.cont1{
  justify-content:space-between;
  padding-right: 37px;
}
#folder-cont{
  transition: all 200ms ease-in 0s;
}
.cont2:hover, #folder-cont:hover{
  background: #cecece;
}
/* #folder-cont:hover{
  padding-left: 2px;
} */
#add-folder-btn:hover{
  background: #eaeaea;
  box-shadow: rgba(15, 15, 15, 0.12) 0px 2px 4px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
}
.modify-folder-btn:hover{
  background: #eaeaea;
  box-shadow: rgba(15, 15, 15, 0.12) 0px 2px 4px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
}
</style>
