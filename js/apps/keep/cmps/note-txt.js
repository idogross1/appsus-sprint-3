import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['data', 'id'],

  template: `
    <article class = "note-txt">
      <div class="note-content"  v-if="!isEditing">
        <p>{{data}}</p>
      </div>
      <div class="edit-note" v-if="isEditing" @input="update">
        <p contenteditable>{{noteCopy}}</p>
      </div>
    </article>
    `,

  data() {
    return {
      isEditing: false,
      noteCopy: this.data,
    };
  },

  created() {
    eventBus.$on('edit', this.editNote);
  },

  methods: {
    editNote(noteId) {
      if (this.id === noteId) {
        this.isEditing = !this.isEditing;
      }
    },

    update(ev) {
      console.log(ev.target.innerText);
      this.$emit('updateData', ev.target.innerText);
    },
  },

  watch: {
    noteCopy(val) {
      this.$emit('updateData', val);
    },

    data(val) {
      this.noteCopy = this.noteInfo;
    },
  },
};
