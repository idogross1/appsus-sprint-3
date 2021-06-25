import pickColor from './pick-color.js';

export default {
  template: `
      <form class="note-todos-form">
        <div class="input-button-wrap">
          <input type="text" v-model="newTodo"  placeholder="todo">
          <div class="add-todo-btn" @click="addTodo"><i class="fas fa-plus"></i></div>
        </div>
          <ul class="clean-list">
            <li v-for="todo in note.data">{{todo.txt}}</li>
          </ul>
          <div class="todos-options">
            <div class="choose-color" @click="onPickColor"><i class="fas fa-palette"></i></div>
            <pick-color @color="changeColor" v-if="isPickingColor"></pick-color>
          <div class="add-delete-wrap">
            <div @click="makeNote" class="make-note-btn"><i class="fas fa-plus"></i></div>
            <div class="delete-note-btn" @click="deleteNote"><i class="far fa-trash-alt"></i></div>
          </div>
        </div>

          </div>
      </form>
      `,

  data() {
    return {
      note: {
        data: [],
        color: '#ffffffc',
      },
      newTodo: '',
      isPickingColor: false,
    };
  },

  methods: {
    makeNote() {
      this.note.type = 'noteTodos';
      this.note.isPinned = false;
      this.$emit('newNote', { ...this.note });
      this.note.data = [];
    },

    addTodo() {
      console.log(this);
      if (!this.newTodo) return;
      this.note.data.push({ txt: this.newTodo, isDone: false });
      this.newTodo = '';
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
