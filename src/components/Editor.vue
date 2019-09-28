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

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph">
          <i class="fas fa-paragraph"></i>
        </button>

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

        <button
          class="menubar__button"
          @click="commands.undo">
          <i class="fas fa-undo-alt"></i>
        </button>

        <button
          class="menubar__button"
          @click="commands.redo">
          <i class="fas fa-redo-alt"></i>
        </button>

      </div>
    </editor-menu-bar>
    <editor-content class="tiptap" :editor="editor" />
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios'
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
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
          new HorizontalRule(),
          new Focus(),
        ],
        content: "",
        // autoFocus: true,
      }),
    }
  },
  created(){
    let self = this;
    axios.get( this.$store.state.domain + '/note?note_id=' + this.$store.state.note_id)
      .then((res) => {
        self.editor.setContent(res.data.content)
      })
      .catch((ex) => { 
      });
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    saveNoteAuto(note_id, title, started_at, ended_at){
      var content = this.editor.getHTML();
      var formData = new FormData();
      formData.append('note_id', note_id);
      formData.append('title', title);
      formData.append('content', content);
      formData.append('started_at', started_at);
      formData.append('ended_at', ended_at);
      
      axios.put(this.$store.state.domain + '/note', formData)
        .then((res) => {
        })
        .catch((ex) => {
          console.log('저장 실패');
        })
    },
    saveNote(note_id, title, started_at, ended_at){
      var content = this.editor.getHTML();
      var formData = new FormData();
      formData.append('note_id', note_id);
      formData.append('title', title);
      formData.append('content', content);
      formData.append('started_at', started_at);
      formData.append('ended_at', ended_at);
      
      axios.put(this.$store.state.domain + '/note', formData)
        .then((res) => {
          Swal.fire({
            position: 'center',
            type: 'success',
            title: '저장 완료',
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch((ex) => {
          console.log('저장 실패');
        })
    },
  }
}
</script>

<style>
.Swal2-container{
  font-family: 'Noto Sans KR', sans-serif;
}
.tiptap{
  height: 100px;
}
.menubar__button{
    font-size: 15px;
    font-weight: bold;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    background: antiquewhite;
}
.has-focus {
  /* border-radius: 3px; */
  /* box-shadow: 0 0 0 1px #3ea4ffe6; */
  /* border: 1px solid #BCBEC0; */
}
div.tiptap p{
    font-size: 16px !important;
    margin-bottom: 5px;
}
div.tiptap strong{
  font-weight: bold;
}
.ProseMirror{
  min-height: 500px;
  position: inherit;
}
</style>