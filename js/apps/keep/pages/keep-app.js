import noteList from '../cmps/note-list.js';
import { keepService } from '../services/keep-service.js';

export default {
  template: `
    <section class="keep-app">
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
  },

  components: {
    noteList,
  },
};
