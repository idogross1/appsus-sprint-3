export default {
  template: `
      <form class="note-todos-form">
          <input type="text" v-model="newTodo"  placeholder="todo">
          <button @click="addTodo">add todo</button>
          <ul class="clean-list">
              <li v-for="todo in note.data">{{todo.txt}}</li>
          </ul>

          <button @click="makeNote">+</button>
      </form>
      `,

  data() {
    return {
      note: {
        data: [],
      },
      newTodo: '',
    };
  },

  methods: {
    makeNote() {
      this.note.type = 'noteTodos';
      this.note.isPinned = false;
      this.$emit('newNote', this.note);
      this.note.data = [];
    },

    addTodo() {
      if (!this.newTodo) return;
      this.note.data.push({ txt: this.newTodo, isDone: false });
      this.newTodo = '';
    },
  },
};
