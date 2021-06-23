export default {
  template: `
    <form class="note-img-form">
        <input v-model="note.info.label" type="text" placeholder="Title">
        <input v-model="note.info.url" type="text" placeholder="Enter Image URL">
        <button  @click.prevent='makeNote'>+</button>
    </form>
    `,

  data() {
    return {
      note: {
        info: {
          title: '',
          url: '',
        },
      },
    };
  },

  methods: {
    makeNote() {
      this.note.type = 'noteImg';
      this.note.isPinned = false;
      this.$emit('newNote', this.note);
    },
  },
};
