export default {
  props: ['data', 'isEditable'],

  template: `
    <article class = "note-txt">
      <div class="note-content"  v-if="!isEditable">
        <p>{{data}}</p>
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

  watch: {
    noteCopy(val) {
      this.$emit('updateData', val);
    },

    data(val) {
      this.noteCopy = this.noteInfo;
    },
  },
};
