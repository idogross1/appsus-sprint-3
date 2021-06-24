import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['todo', 'edit'],

  template: `
        <article class = "todo-task">
            <p :contenteditable="edit" @input="updateTodo" @click="todoDone" :class="{marked: todo.isDone}">{{todo.txt}}</p>
        </article>
        `,

  methods: {
    updateTodo(ev) {
      console.dir(ev.target.innerText);
      this.todo.txt = ev.target.innerText;
      console.log(this.todo);
      this.$emit('updateTodo', this.todo);
    },

    todoDone() {
      this.todo.isDone = !this.todo.isDone;
      console.log('todo--todo-cmp', this.todo.isDone);
    },
  },
};
