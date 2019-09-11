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
          <div id="add-folder-cont" style="visibility:hidden;opacity:0">
            <div id="add-folder-btn" style="display: flex;align-items: center;justify-content:center;width: 20px;height: 20px;border: 1px solid rgba(55, 53, 57, 0.15);">
              <i class="fas fa-plus" style="font-size: 14px;"></i>
            </div>
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
        :to="link.path" 
        @click.native="linkClick"
        :is="elementType(link, false)"
        class="nav-link"
        :class="{ active: link.active }"
        :target="link.target"
        :href="link.path">
        <template v-if="addLink">
          <span class="nav-link-text">{{ link.name }}</span>
        </template>
        <template v-else>
          <i :class="link.icon"></i>
          <span class="nav-link-text">{{ link.name }}</span>
        </template>
      </component>
    </slot>
  </component>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';

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
    }
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
      collapsed: true
    };
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
.sidebar-menu-item {
  cursor: pointer;
}
.sidebar-menu-item,.nav-link{
  color: rgba(0, 0, 0, 0.6) !important;
}
#add-folder-cont{
  transition: all 200ms ease-in 0s;
}
.nav-item.active:hover #add-folder-cont{
  visibility: visible !important;
  opacity:1 !important;
  width: 20px;
}
</style>
