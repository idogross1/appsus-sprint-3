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
        data: 'The two most important days in your life are the day you are born and the day you find out why.',
        color: '#ffadad',
      },
      {
        id: '13b',
        isPinned: true,
        type: 'noteImg',
        data: 'https://images.unsplash.com/photo-1624562616689-3b0b11520eac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
        color: '#ffd6a5',
      },
      {
        id: '13c',
        isPinned: false,
        type: 'noteTodos',
        data: [
          { id: utilService.makeId(2), txt: 'eat()', isDone: false },
          { id: utilService.makeId(2), txt: 'sleep()', isDone: false },
          { id: utilService.makeId(2), txt: 'code()', isDone: true },
          { id: utilService.makeId(2), txt: 'repeat()', isDone: true },
        ],
        color: '#fdffb6',
      },
      {
        id: '13d',
        type: 'noteTxt',
        isPinned: true,
        data: '“People say nothing is impossible, but I do nothing every day.”',
        color: '#caffbf',
      },
      {
        id: '13e',
        isPinned: false,
        type: 'noteImg',
        data: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        color: '#9bf6ff',
      },
      {
        id: '13f',
        isPinned: false,
        type: 'noteTodos',
        data: [
          { id: utilService.makeId(2), txt: 'milk 🥛', isDone: true },
          { id: utilService.makeId(2), txt: 'strawberries 🍓', isDone: false },
          { id: utilService.makeId(2), txt: 'bread 🍞🥖🥪', isDone: false },
        ],
        color: '#a0c4ff',
      },
      {
        id: '13g',
        type: 'noteTxt',
        isPinned: false,
        data: 'Despite the storms, beauty arrives likeit was always going to.Despite the darkness',
        color: '#bdb2ff',
      },
      {
        id: '13h',
        isPinned: false,
        type: 'noteImg',
        data: 'https://images.unsplash.com/photo-1623408998510-a52ef2fdb1fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
        color: '#ffc6ff',
      },
      {
        id: '13i',
        isPinned: true,
        type: 'noteTodos',
        data: [
          {
            id: utilService.makeId(2),
            txt: 'Harry Truman, Doris Day, Red China, Johnnie Ray',
            isDone: false,
          },
          {
            id: utilService.makeId(2),
            txt: 'South Pacific, Walter Winchell, Joe DiMaggio',
            isDone: true,
          },
          {
            id: utilService.makeId(2),
            txt: 'Joe McCarthy, Richard Nixon, Studebaker, television',
            isDone: false,
          },
          {
            id: utilService.makeId(2),
            txt: 'North Korea, South Korea, Marilyn Monroe',
            isDone: false,
          },
          {
            id: utilService.makeId(2),
            txt: "We didn't start the fire",
            isDone: true,
          },
          {
            id: utilService.makeId(2),
            txt: 'It was always burning, since the worlds been turning',
            isDone: false,
          },
          {
            id: utilService.makeId(2),
            txt: "We didn't start the fire",
            isDone: false,
          },
          {
            id: utilService.makeId(2),
            txt: "No, we didn't light it, but we tried to fight it",
            isDone: true,
          },
        ],
        color: '#fffffc',
      },
    ];
    utilService.saveToStorage(KEEPS_KEY, notes);
  }
  return notes;
}
