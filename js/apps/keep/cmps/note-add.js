import noteTxtForm from './note-txt-form.js';
import noteImgForm from './note-img-form.js';
import noteTodoForm from './note-todo-form.js';

export default {
  template: `
        <!-- <section class="note-add" :style="{backgroundColor:'black'}" > -->
        <section class="note-add"  :style="{backgroundColor: color}" >
          <!-- <button @click="noteType='noteTxtForm'">Write a note...</button>
          <button @click="noteType='noteImgForm'">img</button>
          <button @click="noteType='noteTodoForm'">list</button> --> 
          <div class="choose-note-add" v-if="!noteType">
            <div v-if="!noteType" @click="createNote('noteTxtForm')" class="note-add-txt">
              Write a note...
            </div>
            <div class="list-image-wrap">
              <div class="note-add-list" @click="noteType='noteTodoForm'"><i class="far fa-check-square"></i></div>
              <div class="note-add-img" @click="noteType='noteImgForm'"><i class="far fa-image"></i></div>
            </div>
          </div>

          <component @newNote="loadNotes" @deleteNote="deleteNote" @color="changeColor" :is="noteType"></component>
        </section>
    `,

  data() {
    return {
      noteType: null,
      color: '',
    };
  },

  methods: {
    loadNotes(note) {
      this.$emit('newNote', note);
      this.noteType = null;
      this.color = '';
    },

    createNote(str) {
      this.noteType = str;
    },

    deleteNote() {
      this.color = '';
      this.noteType = null;
    },

    changeColor(color) {
      console.log('test');
      this.color = color;
    },
  },

  components: {
    noteTxtForm,
    noteImgForm,
    noteTodoForm,
  },
};
