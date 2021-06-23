import { keepService } from '../services/keep-service.js';

keepService;

export default {
  template: `
    <form class="note-txt-form">
        <input v-model="note.info.label" type="text" placeholder="Title">
        <input v-model="note.info.txt" type="text" placeholder="Write a note...">
        <button  @click.prevent='makeNote'>+</button>
    </form>
    `,

  data() {
    return {
      note: {
        info: {
          label: '',
          txt: '',
        },
      },
    };
  },

  methods: {
    makeNote() {
      this.note.type = 'noteTxt';
      this.note.isPinned = false;
      keepService.addNote(this.note);
    },
  },
};
