export default {
  props: ['note'],

  template: `
        <section class="note-edit">
            {{note}}
            <!-- <h3>{{note.info.label}}</h3> -->
        </section>
    `,

  computed: {
    showNote() {
      if (this.note.type === 'noteTxt') {
      }
    },
  },
};
