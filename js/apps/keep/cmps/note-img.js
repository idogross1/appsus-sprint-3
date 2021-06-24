export default {
  props: ['data', 'isEditable'],

  template: `
      <article class = "note-img">
          <div class="note-content"  v-if="!isEditable">
            <img :src="data">
            {{isEditable}}
        </div>
        <div class="edit-note" v-if="isEditable" @input="update" contenteditable>
            <p >{{noteCopy}}</p>
            {{isEditable}}
            </div>
        </article>
      `,

  data() {
    return {
      isEditing: false,
      noteCopy: this.data,
    };
  },

  methods: {
    update(ev) {
      this.$emit('updateData', ev.target.innerText);
    },
  },
};
