import noteList from '../cmps/note-list.js';
import noteAdd from '../cmps/note-add.js';
import { keepService } from '../services/keep-service.js';

export default {
  template: `
    <section class="keep-app">
      <note-add @newNote="addNewNote"></note-add>
      <noteList :notes="notes"></noteList>
    </section>
      `,

  data() {
    return {
      notes: [],
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
  },

  components: {
    noteList,
    noteAdd,
  },
};
