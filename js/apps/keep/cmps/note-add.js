import noteTxtForm from './note-txt-form.js';

export default {
  template: `
        <section class="note-add" >
            <form>
                <component :is="noteType"></component>
                <button @click="noteType='noteTxtForm'">Write a note...</button>
                <button>img</button>
                <button>list</button>
            </form>
        </section>
    `,

  data() {
    return {
      noteType: null,
    };
  },

  methods: {
    addNoteTxt() {},
  },

  components: {
    noteTxtForm,
  },
};
