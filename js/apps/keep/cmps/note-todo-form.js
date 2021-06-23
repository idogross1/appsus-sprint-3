export default {
  template: `
      <form class="note-todos-form">
          <input v-model="note.info.label" type="text" placeholder="Title">
          <input type="text" v-model="newTodo"  placeholder="todo">
          <button @click="addTodo">add todo</button>
          <ul>
              <li v-for="todo in note.info.todos">{{todo.txt}}</li>
          </ul>

          <button @click="makeNote">+</button>
      </form>
      `,

  data() {
    return {
      note: {
        info: {
          label: '',
          todos: [],
        },
      },
      newTodo: '',
    };
  },

  methods: {
    makeNote() {
      this.note.type = 'noteTodos';
      this.note.isPinned = false;
      this.$emit('newNote', this.note);
    },

    addTodo() {
      if (!this.newTodo) return;
      this.note.info.todos.push({ txt: this.newTodo, isDone: false });
      this.newTodo = '';
      this.note.label = '';
    },
  },
};
