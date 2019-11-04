<template>
  <div class="ns-kr">
    <editor-content class="tiptap" :editor="editor" style="user-select: none;" />
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapState, mapMutations, mapActions } from 'vuex'
import { Editor, EditorContent } from 'tiptap'
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
    this.editor.setOptions({editable: false})
  },
  methods: {
  }
}
</script>

<style>
.Swal2-container{
  font-family: 'Noto Sans KR', sans-serif;
}
.tiptap{
  height: 100px;
  color: #304455;
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