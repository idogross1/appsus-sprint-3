export default {
  props: ['noteId'],

  template: `
        <section class="note-toolbar">
          <!-- <button @click="onDeleteNote">x</button> -->
          <!-- <button v-if="edit" @click.stop="onEditNote">edit</button> -->
          <!-- <button v-if="!edit" @click.stop="onEditNote">save</button> -->
          <!-- <button @click="onPickColor">color</button> -->
          <div @click="onDeleteNote"><i class="far fa-trash-alt"></i></div>
          <div v-if="edit" @click.stop="onEditNote"><i class="far fa-edit"></i></div>
          <div v-if="!edit" @click.stop="onEditNote"><i class="far fa-save"></i></div>
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

    // onSaveNote() {
    //   this.edit = true;
    // },
  },
};
