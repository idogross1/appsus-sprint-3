import { eventBus } from '../../../services/event-bus-service.js';
import pickColor from './pick-color.js';

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
          <pick-color v-if="isPickColor" @color="changeColor"></pick-color>

        </article>
      `,

  data() {
    return {
      isEditing: false,
      noteCopy: this.data,
      isPickColor: false,
    };
  },

  created() {
    eventBus.$on('edit', this.editNote);
    eventBus.$on('color', this.pickColor);
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

    pickColor(noteId) {
      console.log('note-id--note-txt', noteId);
      if (this.id === noteId) {
        this.isPickColor = !this.isPickColor;
      }
    },

    changeColor(color) {
      console.log('color--note-txt ', color);
      this.$emit('color', color);
      this.isPickColor = false;
    },
  },

  components: {
    pickColor,
  },
};
