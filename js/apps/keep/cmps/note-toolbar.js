export default {
  props: ['noteId'],

  template: `
        <section class="note-toolbar">
            <button @click="onDeleteNote">x</button>
            <button @click="onToggleEdit">edit</button>
        </section>
    `,

  methods: {
    onDeleteNote() {
      this.$emit('delete', this.noteId);
    },

    onToggleEdit() {
      this$emit('toggleEdit', this.noteId);
    },
  },
};
