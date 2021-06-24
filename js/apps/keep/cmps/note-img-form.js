export default {
  template: `
    <form class="note-img-form">
        <input v-model="note.data" type="text" placeholder="Enter Image URL">
        <button  @click.prevent='makeNote'>+</button>
    </form>
    `,

  data() {
    return {
      note: {
        data: '',
      },
    };
  },

  methods: {
    makeNote() {
      this.note.type = 'noteImg';
      this.note.isPinned = false;
      this.$emit('newNote', this.note);
      this.note.data = '';
    },
  },
};
