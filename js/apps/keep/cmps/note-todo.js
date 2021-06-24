import todoCmp from './todo-cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['data', 'id'], //noteId

  template: `
    <article class = "note-todo">
            <ul class="todo-list clean-list">
                <li class="todo-item" v-for="todo in data">
                    <todo-cmp :edit="edit" :todo="todo" @updateTodo="onUpdateTodo"></todo-cmp>
                </li>
            </ul>
    </article>
      `,

  data() {
    return {
      edit: false,
    };
  },

  created() {
    eventBus.$on('edit', this.editNote);
  },

  methods: {
    editNote(noteId) {
      if (this.id === noteId) {
        this.edit = !this.edit;
      }
    },

    onUpdateTodo(newTodo) {
      const idx = this.data.findIndex((todo) => todo.id === newTodo.id);
      this.data.splice(idx, 1, newTodo);
      this.$emit('updateData', this.data);
    },
  },

  components: {
    todoCmp,
  },
};
