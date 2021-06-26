export default {
  props: ['noteId'],

  template: `
        <section class="note-toolbar">
          <div @click="onDeleteNote" @mouseover="hover" :class="{animate__animated:over, animate__bounce:over}"><i class="far fa-trash-alt"></i></div>
          <div v-if="edit" @click.stop="onEditNote"><i class="far fa-edit"></i></div>
          <div v-if="!edit" @click.stop="onEditNote"><i class="far fa-save"></i></div>
          <div @click="onShare"><i class="far fa-paper-plane"></i></div>
          <div @click="onPickColor"><i class="fas fa-palette"></i></div>
        </section>
    `,

  data() {
    return {
      edit: true,
      over: false,
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

    hover() {
      console.log('test');
      this.over = true;
    },
  },
};
