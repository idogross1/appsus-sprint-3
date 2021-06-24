import noteImg from './note-img.js';
import noteTxt from './note-txt.js';
import noteTodos from './note-todo.js';
import noteToolbar from './note-toolbar.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['notes'],

  template: `
  <ul class="note-list clean-list">
    <li class="note-item" v-for="note in notes" :key="note.id">
        <component :is="note.type" :data="note.data" :id="note.id" @updateData="updateData($event, note.id)"></component>
        <noteToolbar :noteId="note.id" @delete="deleteNode($event)" @editNote="editNote($event)"></noteToolbar>
    </li>
  </ul>`,

  data() {
    return {
      isEditable: false,
    };
  },

  methods: {
    deleteNode(noteId) {
      this.$emit('deleteNote', noteId);
    },

    editNote(noteId) {
      console.log(noteId);
      eventBus.$emit('edit', noteId);
    },

    updateData(data, noteId) {
      console.log(data);
      console.log(noteId);
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
