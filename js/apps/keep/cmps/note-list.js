import noteImg from './note-img.js';
import noteTxt from './note-txt.js';
import noteTodos from './note-todo.js';
import noteToolbar from './note-toolbar.js';

export default {
  props: ['notes'],

  template: `
  <ul class="note-list">
    <li class="note-item" v-for="note in notes" :key="note.id">
        <component :is="note.type" :data="note.data" :isEditable="isEditable" @updateData="updateData($event, note.id)"></component>
        <!-- <button @click="toggleEdit">edit</button> -->
        <!-- <button @click="onDeleteNote(note.id)">x</button> -->
        <noteToolbar :noteId="note.id" @delete="deleteNode($event)" @toggleEdit=toggleEdit($event)></noteToolbar>
    </li>
  </ul>`,

  data() {
    return {
      isEditable: false,
    };
  },

  methods: {
    deleteNode(noteId) {
      console.log(noteId);
      this.$emit('deleteNote', noteId);
    },

    toggleEdit() {
      this.isEditable = !this.isEditable;
    },

    updateData(data, noteId) {
      this.$emit('update', { noteId, data });
    },
  },

  components: {
    noteImg,
    noteTxt,
    noteTodos,
    noteToolbar,
  },
};
