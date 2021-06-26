export default {
  props: ['noteId'],

  template: `
        <section class="note-toolbar">
          <div @click="onDeleteNote"><i class="far fa-trash-alt"></i></div>
          <div v-if="edit" @click.stop="onEditNote"><i class="far fa-edit"></i></div>
          <div v-if="!edit" @click.stop="onEditNote"><i class="far fa-save"></i></div>
          <div @click="onShare"><i class="far fa-paper-plane"></i></div>
          <div @click="onPickColor"><i class="fas fa-palette"></i></div>
        </section>
    `,

  data() {
    return {
      edit: true,
    };
  },

  methods: {
    onDeleteNote() {
      this.$emit('delete', this.noteId);
    },

    onEditNote() {
      this.edit = !this.edit;
      this.$emit('editNote', this.noteId);
    },

    onPickColor() {
      this.$emit('pickColor');
    },

    onShare() {
      this.$emit('send', this.noteId);
    },
  },
};
