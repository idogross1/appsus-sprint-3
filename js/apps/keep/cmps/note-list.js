import noteImg from './note-img.js';
import noteTxt from './note-txt.js';
import noteTodos from './note-todo.js';
import noteToolbar from './note-toolbar.js';
import pickColor from './pick-color.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['notes'],

  template: `
  <ul class="note-list clean-list">
    <li class="note-item" v-for="note in notes" :key="note.id">
        <component :edit="isEditable" :is="note.type" :data="note.data" :id="note.id" @updateData="updateData($event, note.id)">
        </component>
        <noteToolbar :noteId="note.id" @delete="deleteNode($event)" @editNote="editNote($event)" @pickColor="pickColor(note.id)"></noteToolbar>
        <!-- <pick-color v-if="isPickColor"></pick-color> -->

    </li>
  </ul>`,

  data() {
    return {
      isEditable: false,
      // isPickColor: false,
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

    pickColor(noteId) {
      console.log('note Id--note-list', noteId);
      // this.isPickColor = !this.isPickColor;
      eventBus.$emit('color', noteId);
    },
  },

  components: {
    noteImg,
    noteTxt,
    noteTodos,
    noteToolbar,
    pickColor,
  },
};
