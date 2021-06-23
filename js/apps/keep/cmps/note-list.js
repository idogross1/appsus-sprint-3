import noteImg from './note-img.js';
import noteTxt from './note-txt.js';
import noteTodos from './note-todo.js';

export default {
  props: ['notes'],

  template: `
  <ul class="note-list">
    <li class="note-item" v-for="note in notes" :key="note.id">
        <component :is="note.type" :note="note" @click.native="onNote(note.id)"></component>
        <button @click="onDeleteNote(note.id)">x</button>
    </li>
  </ul>`,

  methods: {
    onDeleteNote(noteId) {
      this.$emit('deleteNote', noteId);
    },

    onNote(noteId) {
      this.$emit('select', noteId);
    },
  },

  components: {
    noteImg,
    noteTxt,
    noteTodos,
  },
};
