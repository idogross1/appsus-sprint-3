import todoCmp from './todo-cmp.js';

export default {
  props: ['note'],

  template: `
    <article class = "note-todo">
        <h3>{{note.info.label}}</h3>
            <ul class="todo-list">
                <li class="todo-item" v-for="todo in note.info.todos">
                    <todo-cmp :todo="todo"></todo-cmp>
                </li>
            </ul>
    </article>
      `,

  components: {
    todoCmp,
  },
};
// {
//     id: '13c',
//     type: 'noteTodos',
//     info: {
//       label: 'How was it:',
//       todos: [
//         { txt: 'Do that', doneAt: false },
//         { txt: 'Do this', doneAt: false },
//       ],
//     },
//   },
