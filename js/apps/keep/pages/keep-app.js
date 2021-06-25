import noteList from '../cmps/note-list.js';
import noteAdd from '../cmps/note-add.js';
import noteEdit from '../cmps/note-edit.js';
import noteSearch from '../cmps/note-search.js';
import { keepService } from '../services/keep-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
  template: `
    <section class="keep-app">
      <note-search @filter="setFilter"></note-search>
      <note-add @newNote="addNewNote"></note-add>
      <note-list v-if="filterdNotes" @pin="pinNote" @deleteNote="deleteNote" @update="updateNote" @color="changeColor" :notes="filterdNotes"></note-list>
      <note-list v-if="pinnedNotes.length && !filterdNotes.length" @pin="pinNote" @deleteNote="deleteNote" @update="updateNote" @color="changeColor" :notes="pinnedNotes"></note-list>
      <note-list v-if="unPinnedNotes.length && !filterdNotes.length" @pin="pinNote" @deleteNote="deleteNote" @update="updateNote" @color="changeColor" :notes="unPinnedNotes"></note-list>
    </section>
      `,

  data() {
    return {
      notes: [],
      pinnedNotes: [],
      unPinnedNotes: [],
      filterdNotes: [],
      noteSelected: {},
      edit: false,
    };
  },

  created() {
    this.loadNotes();
    eventBus.$on('marked', this.marked);
  },

  methods: {
    loadNotes() {
      keepService.query().then((notes) => {
        this.notes = notes;
        this.unPinnedNotes = notes.filter((note) => !note.isPinned);
        this.pinnedNotes = notes.filter((note) => note.isPinned);
      });
    },

    addNewNote(note) {
      keepService.addNote(note).then(() => this.loadNotes());
    },

    deleteNote(noteId) {
      keepService.deletetNote(noteId).then(() => this.loadNotes());
    },

    updateNote({ noteId, data }) {
      console.log('test');
      keepService
        .getById(noteId)
        .then((note) => {
          note.data = data;
          keepService.updateNote(note);
        })
        .then(() => this.loadNotes());
    },

    changeColor({ noteId, color }) {
      console.log('noteId--keep-app', noteId);
      console.log('color--keep-app', color);
      keepService
        .getById(noteId)
        .then((note) => {
          note.color = color;
          console.log(note);
          keepService.updateNote(note);
        })
        .then(() => this.loadNotes());
    },

    pinNote(noteId) {
      console.log('pin-note--keep-app', noteId);
      keepService
        .getById(noteId)
        .then((note) => {
          note.isPinned = !note.isPinned;
          keepService.updateNote(note);
        })
        .then(() => this.loadNotes());
    },

    setFilter(str) {
      console.log('str--keep-app', str);
      this.filter = str;
      this.filterdNotes = this.notesToShow();
      if (!this.filter) this.filterdNotes = [];
    },

    notesToShow() {
      const searchStr = this.filter;
      const notes = this.notes.filter((note) => {
        if (
          note.type === 'noteTxt' &&
          note.data.toLowerCase().includes(searchStr)
        )
          return note;
        if (note.type === 'noteTodo') {
          note.data.filter((todo) => {
            console.log(todo);
          });
        }
      });

      return notes;
    },

    marked(todo) {
      keepService
        .getByTodoId(todo.id)
        .then((note) => {
          const oldTodoIdx = note.data.findIndex((oldTodo) => {
            if (oldTodo.id === todo.id) return oldTodo;
          });
          note.data.splice(oldTodoIdx, 1, todo);
          keepService.updateNote(note);
        })
        .then(() => this.loadNotes());
    },
  },

  components: {
    noteList,
    noteAdd,
    noteEdit,
    noteSearch,
  },
};
