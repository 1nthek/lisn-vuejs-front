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
        @click.self="linkClick"
        :is="elementType(link, false)"
        class="nav-link"
        :target="link.target"
        :href="link.path">
        <template v-if="addLink" >   <!-- each directory -->
          <div id="folder-cont" style="display: flex;align-items: center;justify-content:space-between;width: 100%;">
            <div style="display: flex;align-items: center;justify-content:space-between;width: 100%;padding:4px 20px 4px 32px">
              <div style="padding-left: 30px;">
                <span class="nav-link-text" >{{ link.name }}</span>            
              </div>
              <div style="font-size: 14px;display: flex;">
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
            <div class="cont2">
              <i :class="link.icon"></i>
              <span class="nav-link-text" style="padding-left: 18px;">{{ link.name }}</span>
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
    ]),
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
#folder-cont:hover{
  padding-left: 2px;
}
#add-folder-btn:hover{
  background: #eaeaea;
  box-shadow: rgba(15, 15, 15, 0.12) 0px 2px 4px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
}
.modify-folder-btn:hover{
  background: #eaeaea;
  box-shadow: rgba(15, 15, 15, 0.12) 0px 2px 4px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
}
</style>
