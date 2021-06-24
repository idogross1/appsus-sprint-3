import todoCmp from './todo-cmp.js';

export default {
  props: ['data'],

  template: `
    <article class = "note-todo">
            <ul class="todo-list">
                <li class="todo-item" v-for="todo in data">
                    <todo-cmp :todo="todo"></todo-cmp>
                </li>
            </ul>
    </article>
      `,

  components: {
    todoCmp,
  },
};
