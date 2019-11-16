<template>
  <div class="ns-kr">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar" style="margin: 12px 0;">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold">
          <i class="fas fa-bold"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic">
          <i class="fas fa-italic"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike">
          <i class="fas fa-strikethrough"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code">
          <i class="fas fa-highlighter"></i>
        </button>

        <!-- <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph">
          <i class="fas fa-paragraph"></i>
        </button> -->

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })">
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })">
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })">
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list">
          <i class="fas fa-list-ul"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list">
          <i class="fas fa-list-ol"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote">
          <i class="fas fa-quote-left"></i>
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule">
          <i class="fas fa-grip-lines"></i>
        </button>

        <!-- <button
          class="menubar__button"
          @click="commands.undo">
          <i class="fas fa-undo-alt"></i>
        </button>

        <button
          class="menubar__button"
          @click="commands.redo">
          <i class="fas fa-redo-alt"></i>
        </button> -->

      </div>
    </editor-menu-bar>
    <editor-content class="tiptap" :editor="editor" />
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapState, mapMutations, mapActions } from 'vuex'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  HorizontalRule,
  Focus,
} from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  props: {
    content: String,
  },
  data() {
    return {
      editor: new Editor(),
    }
  },
  computed: {
    ...mapState([
      'tiptap_editor',
    ]),
  },
  created(){
    this.editor = this.tiptap_editor;
    this.editor.setOptions({editable: true})
  },
  methods: {
    ...mapActions([
      'UPDATE_NOTE',
    ]),
    saveNote(title){
      var content = this.editor.getHTML();
      this.UPDATE_NOTE({ title, content});
    },
  }
}
</script>

<style>
p.is-empty:first-child:before {
    content: attr(data-empty-text);
    float: left;
    color: #aaa;
    pointer-events: none;
    height: 0;
    font-style: italic;
}
code {
  font-size: 95%;
  color: #2781dd;
  word-break: break-word;
  font-family: 'Noto Sans KR', sans-serif;
}
.Swal2-container{
  font-family: 'Noto Sans KR', sans-serif;
}
.tiptap{
  height: 100px;
  color: #304455;
  font-family: 'Noto Sans KR', sans-serif;
}
.menubar__button{
    font-size: 15px;
    font-weight: bold;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    background: antiquewhite;
}
div.tiptap p{
    font-size: 16px !important;
    margin-bottom: 0px;
}
div.tiptap strong{
  font-weight: bold;
}
.ProseMirror{
  min-height: 500px;
  position: inherit;
}
</style>