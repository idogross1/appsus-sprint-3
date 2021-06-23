import noteList from '../cmps/note-list.js';
import noteAdd from '../cmps/note-add.js';
import noteEdit from '../cmps/note-edit.js';
import { keepService } from '../services/keep-service.js';

export default {
  template: `
    <section class="keep-app">
      <note-add @newNote="addNewNote"></note-add>
      <noteList @deleteNote="deleteNote" @select="selectNote" :notes="notes"></noteList>
      <div v-if="edit" contenteditable="true">
       <note-edit :note="noteSelected"></note-edit>
      </div>
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

    selectNote(noteId) {
      console.log(noteId + ' selected');
      this.edit = !this.edit;
      keepService.getById(noteId).then((note) => {
        console.log(note);
        this.noteSelected = note;
      });
    },
  },

  components: {
    noteList,
    noteAdd,
    noteEdit,
  },
};
