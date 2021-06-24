import todoCmp from './todo-cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';
import pickColor from './pick-color.js';

export default {
  props: ['data', 'id'], //noteId

  template: `
    <article class = "note-todo">
      <ul class="todo-list clean-list">
        <li class="todo-item" v-for="todo in data">
          <todo-cmp :edit="edit" :todo="todo" @updateTodo="onUpdateTodo"></todo-cmp>
        </li>
      </ul>
      <pick-color v-if="isPickColor" @color="changeColor"></pick-color>
    </article>
      `,

  data() {
    return {
      edit: false,
      isPickColor: false,
    };
  },

  created() {
    eventBus.$on('edit', this.editNote);
    eventBus.$on('color', this.pickColor);
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

    pickColor(noteId) {
      console.log('note-id--note-txt', noteId);
      if (this.id === noteId) {
        this.isPickColor = !this.isPickColor;
      }
    },

    changeColor(color) {
      console.log('color--note-txt ', color);
      this.$emit('color', color);
      this.isPickColor = false;
    },
  },

  components: {
    todoCmp,
    pickColor,
  },
};
