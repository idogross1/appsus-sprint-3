import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['data', 'id'],

  template: `
      <article class = "note-img">
          <div class="note-content"  v-if="!isEditing">
              <img :src="data">
            </div>
            <div class="edit-note" v-if="isEditing" @input="update" >
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
    update(ev) {
      this.$emit('updateData', ev.target.innerText);
    },

    editNote(noteId) {
      if (this.id === noteId) {
        this.isEditing = !this.isEditing;
      }
    },
  },
};
