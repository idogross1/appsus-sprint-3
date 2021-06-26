import { eventBus } from '../../../services/event-bus-service.js';
import pickColor from './pick-color.js';

export default {
  props: ['data', 'id'],

  template: `
    <article class ="note-txt">
      <div class="note-content" :contenteditable="isEditing" @input="update">
        <p>{{data}}</p>
      </div>
      <pick-color v-if="isPickColor" @color="changeColor"></pick-color>
    </article>
    `,

  data() {
    return {
      isEditing: false,
      isPickColor: false,
      noteCopy: this.data,
    };
  },

  created() {
    eventBus.$on('edit', this.editNote);
    eventBus.$on('color', this.pickColor);
  },

  methods: {
    editNote(noteId) {
      console.log(this.noteCopy);
      if (this.id === noteId) {
        this.isEditing = !this.isEditing;
      }
    },

    update(ev) {
      if (this.isEditing) return;
      console.log('new value: ', ev.target.innerText);
      this.$emit('updateData', ev.target.innerText);
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
