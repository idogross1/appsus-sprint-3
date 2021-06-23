import noteTxtForm from './note-txt-form.js';
import noteImgForm from './note-img-form.js';
import noteTodoForm from './note-todo-form.js';

export default {
  template: `
        <section class="note-add" >
            <form>
                <component @newNote="loadNotes" :is="noteType"></component>
                <button @click="noteType='noteTxtForm'">Write a note...</button>
                <button @click="noteType='noteImgForm'">img</button>
                <button @click="noteType='noteTodoForm'">list</button>
            </form>
        </section>
    `,

  data() {
    return {
      noteType: null,
    };
  },

  methods: {
    loadNotes(note) {
      this.$emit('newNote', note);
    },
  },

  components: {
    noteTxtForm,
    noteImgForm,
    noteTodoForm,
  },
};
