<template>
  <component
    :is="baseComponent"
    :to="link.path ? link.path : '/'"
    class="nav-item"
    :class="{ active: isActive }"
    tag="li">
    <a v-if="isMenu"
      class="sidebar-menu-item nav-link"
      :aria-expanded="!collapsed"
      data-toggle="collapse"
      @click.prevent="collapseMenu">
      <template v-if="addLink">
        <span class="nav-link-text">
          {{ link.name }} <b class="caret"></b>
        </span>
      </template>
      <template v-else>
        <div style="display: flex;align-items: center;justify-content:space-between;width: 100%;padding-right: 10px;">
          <div>
            <i :class="link.icon" style="min-width: 2rem;"></i>
            <span class="nav-link-text">{{ link.name }} <b class="caret"></b></span>
          </div>
          <div id="add-folder-btn" @click.stop="addFolder()">
            <i class="fas fa-plus" style="font-size: 14px;"></i>
          </div>
        </div>
      </template>
    </a>

    <collapse-transition>
      <div
        v-if="$slots.default || this.isMenu"
        v-show="!collapsed"
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
        @click.self="linkClick"
        :is="elementType(link, false)"
        class="nav-link"
        :class="{ active: link.active }"
        :target="link.target"
        :href="link.path">
        <template v-if="addLink" >
          <div id="folder-cont" style="display: flex;align-items: center;justify-content:space-between;width: 100%;">
            <div @click.self="getFolderList()" style="display: flex;align-items: center;justify-content:space-between;width: 100%;padding: 4px 16px 4px 52px">
              <div>
                <span class="nav-link-text" @click.self="getFolderList()" >{{ link.name }}</span>            
              </div>
              <div style="font-size: 14px;display: flex;">
                <div class="modify-folder-btn" @click="renameFolder()">
                  <i class="fas fa-edit" @click="renameFolder()"></i>
                </div>
                <div class="modify-folder-btn" @click="deleteFolder()">
                  <i class="fas fa-trash" @click="deleteFolder()"></i>
                </div>
              </div>
              <!-- <div style="position: absolute;left: 150px;" v-show="folderModify" >
                <div style="margin-left: 30px;" @mouseleave="folderModify = false">
                    <div class="dropdown-item" style="background: white;box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; border-radius: 3px;padding: 0" >
                      <div class="navbar-icon" style="font-size: 15px;color:black;display: flex;">
                        <div style="padding:0px 3px 1px 6px;border-radius: 3px 0px 0px 3px" class="fold-icon" @click="renameFolder()">
                          <i class="fas fa-edit" @click="renameFolder()"></i>
                        </div>
                        <div style="padding:0px 6px 1px 3px;border-radius: 0px 3px 3px 0px;"  class="fold-icon" @click="deleteFolder()">
                          <i class="fas fa-trash" @click="deleteFolder()"></i>
                        </div>
                      </div>
                    </div>
                </div>
              </div> -->
            </div>
          </div>
        </template>
        <template v-else>
          <template v-if="category == 'all'">
            <div class="cont2" style="display: flex;align-items: center;width: 100%;padding: 0.675rem 1.5rem;" @click="getAllNote">
              <i :class="link.icon" ></i>
              <span class="nav-link-text" style="padding-left: 18px;" @click="getAllNote">{{ link.name }}</span>
            </div>
          </template>
          <template v-if="category == 'shared'">
            <div class="cont2" style="display: flex;align-items: center;width: 100%;padding: 0.675rem 1.5rem;" @click="getSharedNote">
              <i :class="link.icon" ></i>
              <span class="nav-link-text" style="padding-left: 18px;" @click="getSharedNote">{{ link.name }}</span>
            </div>
          </template>
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
    category:{
      type: String,
      default: "",
    },
  },
  provide() {
    return {
      addLink: this.addChild,
      removeLink: this.removeChild
    };
  },
  inject: {
    addLink: { default: null },
    removeLink: { default: null },
    autoClose: {
      default: true
    }
  },
  data() {
    return {
      children: [],
      collapsed: false,
      folderModify: false,
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
    isActive() {
      if (this.$route && this.$route.path) {
        let matchingRoute = this.children.find(c =>
          this.$route.path.startsWith(c.link.path)
        );
        if (matchingRoute !== undefined) {
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    ...mapMutations([
      'setDirectoryName',
      'getDirectoryNoteList'
    ]),
    ...mapActions([
      'FETCH_LISTS',
      'FETCH_SHARED_LISTS',
      'FETCH_DIRECTORIES',
      'FETCH_DIRECTORY_LISTS',
      'CREATE_DIRECTORY',
      'UPDATE_DIRECTORY',
      'DESTROY_DIRECTORY',
    ]),
    getAllNote(){
      this.FETCH_LISTS();
    },
    getSharedNote(){
      this.FETCH_SHARED_LISTS();
    },
    getFolderList(){
      const directory_id = this.directory_id;
      const directory_name = this.directory_name;
      this.FETCH_DIRECTORY_LISTS({directory_id, directory_name})
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
      }).then(result => {
        if (result.value) {
          this.DESTROY_DIRECTORY(this.directory_id);
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
    linkAbbreviation(name) {
      const matches = name.match(/\b(\w)/g);
      return matches.join('');
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
    collapseMenu() {
      this.collapsed = !this.collapsed;
    },
    collapseSubMenu(link) {
      link.collapsed = !link.collapsed;
    }
  },
  mounted() {
    if (this.addLink) {
      this.addLink(this);
    }
    if (this.link.collapsed !== undefined) {
      this.collapsed = this.link.collapsed;
    }
    if (this.isActive && this.isMenu) {
      this.collapsed = false;
    }
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    if (this.removeLink) {
      this.removeLink(this);
    }
  }
};
</script>
<style>
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
  color: rgba(0, 0, 0, 0.6) !important;
}
.nav-item:hover #add-folder-btn{
  visibility: visible !important;
  opacity:1 !important;
}
#add-folder-btn,.modify-folder-btn{
  transition: all 200ms ease-in 0s;
  display: flex;
  align-items: center;
  justify-content:center;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  visibility:hidden;
  opacity:0
}
#add-folder-btn{
  border: 1px solid rgba(55, 53, 57, 0.15);
}
.cont2{
  transition: all 200ms ease-in 0s;
}
.cont2:hover{
  background: rgb(233, 233, 233);
}
#add-folder-btn:hover{
  background: #DAD9D6;
}
.modify-folder-btn:hover{
  background: #DAD9D6;
}
#folder-cont:hover .modify-folder-btn{
  visibility: visible !important;
  opacity:1 !important;
}
/* .nav.nav-sm.flex-column #cont-folder{
  padding: 0 !important;
} */
#folder-cont{
  transition: all 200ms ease-in 0s;
}
#folder-cont:hover{
  background: rgb(233, 233, 233);
}
</style>
