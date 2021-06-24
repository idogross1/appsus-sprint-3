import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['todo', 'edit'],

  template: `
        <article class = "todo-task">
            <p :contenteditable="edit" @input="updateTodo">{{todo.txt}}</p>
        </article>
        `,

  methods: {
    updateTodo(ev) {
      console.dir(ev.target.innerText);
      this.todo.txt = ev.target.innerText;
      console.log(this.todo);
      this.$emit('updateTodo', this.todo);
    },
  },
};
