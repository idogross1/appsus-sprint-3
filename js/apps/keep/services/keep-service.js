import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const KEEPS_KEY = 'keep';
_createNotes();

export const keepService = {
  query,
  getById,
  addNote,
};

function query() {
  return storageService.query(KEEPS_KEY);
}

function getById(noteId) {
  return storageService.get(KEEPS_KEY, noteId);
}

function addNote(note) {
  return storageService.post(KEEPS_KEY, note);
}

function _createNotes() {
  let notes = utilService.loadFromStorage(KEEPS_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: '13a',
        type: 'noteTxt',
        isPinned: false,
        info: {
          txt: 'Fullstack Me Baby!',
        },
      },
      {
        id: '13b',
        type: 'noteImg',
        info: {
          url: 'img/keep/001.jpg',
          title: 'Me playing Mi',
        },
        style: {
          backgroundColor: '#00d',
        },
      },
      {
        id: '13c',
        type: 'noteTodos',
        info: {
          label: 'How was it:',
          todos: [
            { txt: 'Do that', doneAt: false },
            { txt: 'Do this', doneAt: false },
          ],
        },
      },
    ];
    utilService.saveToStorage(KEEPS_KEY, notes);
  }
  return notes;
}
