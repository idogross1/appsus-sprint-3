import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['data', 'id'],

  template: `
      <article class = "note-img">
          <div class="note-content">
              <img v-if="!isEditing"  :src="data">
                <p v-if="isEditing" :contenteditable="isEditing" @input="update">{{noteCopy}}</p>
            </div>
            <!-- <div class="edit-note" v-if="isEditing" @input="update" >
            </div> -->
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
