export default {
  props: ['noteId'],

  template: `
        <section class="note-toolbar">
<<<<<<< HEAD
          <div @click="onDeleteNote"><i class="far fa-trash-alt"></i></div>
          <div v-if="edit" @click.stop="onEditNote"><i class="far fa-edit"></i></div>
          <div v-if="!edit" @click.stop="onEditNote"><i class="far fa-save"></i></div>
          <div @click="onShare"><i class="far fa-paper-plane"></i></div>
=======
          <!-- <button @click="onDeleteNote">x</button> -->
          <!-- <button v-if="edit" @click.stop="onEditNote">edit</button> -->
          <!-- <button v-if="!edit" @click.stop="onEditNote">save</button> -->
          <!-- <button @click="onPickColor">color</button> -->
          <div @click="onDeleteNote"><i class="far fa-trash-alt"></i></div>
          <div v-if="edit" @click.stop="onEditNote"><i class="far fa-edit"></i></div>
          <div v-if="!edit" @click.stop="onEditNote"><i class="far fa-save"></i></div>
>>>>>>> 809736745606aaf738b1498cd955478232ad90b8
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

<<<<<<< HEAD
    onShare() {
      this.$emit('send', this.noteId);
    },
=======
    // onSaveNote() {
    //   this.edit = true;
    // },
>>>>>>> 809736745606aaf738b1498cd955478232ad90b8
  },
};
