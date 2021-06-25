import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const KEEPS_KEY = 'keep';
_createNotes();

export const keepService = {
  query,
  getById,
  addNote,
  deletetNote,
  updateNote,
  getByTodoId,
};

function query() {
  return storageService.query(KEEPS_KEY);
}

function getByTodoId(todoId) {
  return query().then((notes) => {
    return notes.find((note) => {
      if (note.type === 'noteTodos') {
        return note.data.find((todo) => {
          return todo.id === todoId;
        });
      }
    });
  });
}

function getById(noteId) {
  return storageService.get(KEEPS_KEY, noteId);
}

function addNote(note) {
  if (note.type === 'noteTodos') {
    note.data.forEach((todo) => {
      todo.id = utilService.makeId(2);
    });
  }
  return storageService.post(KEEPS_KEY, note);
}

function deletetNote(noteId) {
  return storageService.remove(KEEPS_KEY, noteId);
}

function updateNote(note) {
  return storageService.put(KEEPS_KEY, note);
}

function _createNotes() {
  let notes = utilService.loadFromStorage(KEEPS_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: '13a',
        type: 'noteTxt',
        isPinned: false,
        data: 'Fullstack Me Baby!',
      },
      {
        id: '13b',
        isPinned: false,
        type: 'noteImg',
        data: 'img/keep/001.jpg',
      },
      {
        id: '13c',
        isPinned: false,
        type: 'noteTodos',
        data: [
          { id: utilService.makeId(2), txt: 'Do that', isDone: false },
          { id: utilService.makeId(2), txt: 'Do this', isDone: false },
        ],
      },
    ];
    utilService.saveToStorage(KEEPS_KEY, notes);
  }
  return notes;
}
