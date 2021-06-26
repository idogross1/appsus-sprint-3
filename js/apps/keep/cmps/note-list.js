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
    <!-- <li class="note-item" v-for="note in notes" :key="note.id" :style="{backgroundColor : note.color, borderColor: borderColor}"> -->
    <li class="note-item" v-for="note in notes" :key="note.id" :style="{backgroundColor : note.color, borderColor: note.color === '#fffffc' ? '#1c1c1c' : note.color}">
      <div class="pin-note" @click="onPinNote(note.id)"><i class="fas fa-thumbtack"></i></div>
      <component  :edit="isEditable" :is="note.type" :data="note.data" :id="note.id" @updateData="updateData($event, note.id)" @color="changeColor($event,note.id)">
        </component>
<<<<<<< HEAD
        <note-toolbar  :noteId="note.id" @delete="deleteNode($event)" @editNote="editNote($event)" @pickColor="pickColor(note.id)" @send="sendEmail"></note-toolbar>
=======
        <note-toolbar  :noteId="note.id" @delete="deleteNode($event)" @editNote="editNote($event)" @pickColor="pickColor(note.id)"></note-toolbar>
>>>>>>> 809736745606aaf738b1498cd955478232ad90b8
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
<<<<<<< HEAD

    sendEmail(noteId) {
      this.$emit('send', noteId);
    },
=======
>>>>>>> 809736745606aaf738b1498cd955478232ad90b8
  },

  computed: {
    borderColor(note) {
      console.log(note);
      console.log(note.color === '#ffffffc');
      // if (note.color === '#fffffc') return '#1c1c1c';
      // return note.color;
      return note.color === '#fffffc' ? '#1c1c1c' : note.color;
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
