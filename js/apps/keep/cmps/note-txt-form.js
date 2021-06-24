export default {
  template: `
    <form class="note-txt-form">
        <input v-model="note.data" type="text" placeholder="Write a note...">
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
      this.note.type = 'noteTxt';
      this.note.isPinned = false;
      this.$emit('newNote', this.note);
    },
  },
};
