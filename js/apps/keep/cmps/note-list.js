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
    <li class="note-item" v-for="note in notes" :key="note.id" :style="{backgroundColor : note.color}">
      <button class="btn-pin" @click="onPinNote(note.id)">pin</button>
        <component  :edit="isEditable" :is="note.type" :data="note.data" :id="note.id" @updateData="updateData($event, note.id)" @color="changeColor($event,note.id)">
        </component>
        <noteToolbar  :noteId="note.id" @delete="deleteNode($event)" @editNote="editNote($event)" @pickColor="pickColor(note.id)"></noteToolbar>
        <!-- <pick-color v-if="isPickColor"></pick-color> -->

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

    pickColor(noteId) {
      // open color menue
      console.log('note Id--note-list', noteId);
      // this.isPickColor = !this.isPickColor;
      eventBus.$emit('color', noteId);
    },

    changeColor(color, noteId) {
      console.log('color--note-list ', color);
      console.log('noteId-note-list ', noteId);
      this.$emit('color', { noteId, color });
    },

    onPinNote(noteId) {
      console.log('pin-note--note-list', noteId);
      this.$emit('pin', noteId);
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
