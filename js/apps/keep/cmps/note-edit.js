import todoCmp from './todo-cmp.js';

export default {
  props: ['note'],

  template: `
        <section class="note-edit">
            {{label}}
            <h3>{{note.info?.label}}</h3>
            <p>{{note.info?.txt}}</p>
            <p>{{note.info?.url}}</p>
            <ul>
                <li v-for="todo in note.info?.todos">
                    <todo-cmp :todo="todo"></todo-cmp>
                </li>
            </ul>
        </section>
    `,

  data() {
    return {
      label: '',
    };
  },

  computed: {
    showNote() {
      if (this.note.type === 'noteTxt') {
      }
    },
  },

  components: {
    todoCmp,
  },
};
