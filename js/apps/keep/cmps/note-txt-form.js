import pickColor from './pick-color.js';

export default {
  template: `
    <form class="note-txt-form">
      <div class="input-pin">
        <input v-model="note.data" type="text" placeholder="Write a note...">
        <div class="pin-note" @click="pinNote"><i class="fas fa-thumbtack"></i></div>
      </div>
        <div class="options-bar">
        <div class="choose-color" @click="onPickColor"><i class="fas fa-palette"></i></div>
        <pick-color @color="changeColor" v-if="isPickingColor"></pick-color>

          <div class="add-delete-wrap">
            <div @click="makeNote" class="make-note-btn"><i class="fas fa-plus"></i></div>
            <div class="delete-note-btn" @click="deleteNote"><i class="far fa-trash-alt"></i></div>
          </div>
        </div>
    </form>
    `,

  data() {
    return {
      note: {
        data: '',
        color: '',
        isPinned: false,
        type: 'noteTxt',
      },
      isPickingColor: false,
    };
  },

  methods: {
    makeNote() {
      this.$emit('newNote', { ...this.note });
      this.note.data = '';
    },

    deleteNote() {
      this.$emit('deleteNote');
    },

    pinNote() {
      this.note.isPinned = !this.note.isPinned;
    },

    onPickColor() {
      this.isPickingColor = !this.isPickingColor;
    },

    changeColor(color) {
      this.note.color = color;
      this.$emit('color', color);
    },
  },

  components: {
    pickColor,
  },
};
