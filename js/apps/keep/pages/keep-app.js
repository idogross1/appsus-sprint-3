import noteList from '../cmps/note-list.js';
import noteAdd from '../cmps/note-add.js';
import noteEdit from '../cmps/note-edit.js';
import { keepService } from '../services/keep-service.js';

export default {
  template: `
    <section class="keep-app">
      <note-add @newNote="addNewNote"></note-add>
      <note-list @deleteNote="deleteNote" @update="updateNote" :notes="notes"></note-list>
    </section>
      `,

  data() {
    return {
      notes: [],
      noteSelected: {},
      edit: false,
    };
  },

  created() {
    this.loadNotes();
  },

  methods: {
    loadNotes() {
      keepService.query().then((notes) => {
        this.notes = notes;
      });
    },

    addNewNote(note) {
      keepService.addNote(note).then(() => this.loadNotes());
    },

    deleteNote(noteId) {
      keepService.deletetNote(noteId).then(() => this.loadNotes());
    },

    updateNote({ noteId, data }) {
      keepService.getById(noteId).then((note) => {
        note.data = data;
        keepService.updateNote(note);
      });
    },
  },

  components: {
    noteList,
    noteAdd,
    noteEdit,
  },
};
