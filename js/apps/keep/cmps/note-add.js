export default {
  template: `
        <section class="note-add" >
            <form>
                <component :is="noteType"></component>
                <!-- <button @click="add">Write a note...</button> -->
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
};
