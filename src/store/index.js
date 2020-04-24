import Vue from 'vue';
import Vuex from 'vuex';
import uuid from '../utils/main.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {
        title: 'Work',
        id: uuid(),
        todos: [
          {
            text: 'Make todo app',
            checked: true,
            id: uuid(),
          },
          {
            text: 'Create a portfolio site',
            checked: false,
            id: uuid(),
          },
          {
            text: 'Learn PHP',
            checked: false,
            id: uuid(),
          },
          {
            text: 'Learn JS',
            checked: true,
            id: uuid(),
          },
          {
            text: 'Read about Vue testing',
            checked: false,
            id: uuid(),
          },
        ],
      },
      {
        title: 'Life',
        id: uuid(),
        todos: [
          {
            text: 'Walk the dog',
            checked: false,
            id: uuid(),
          },
          {
            text: 'Feed the fish',
            checked: true,
            id: uuid(),
          },
          {
            text: 'Clean the room',
            checked: true,
            id: uuid(),
          },
        ],
      },
    ],
  },
  mutations: {
    // Notes

    getNoteById(state, id) {
      const [note] = state.notes.filter((note) => note.id === id);
      return note;
    },

    removeNoteById(state, id) {
      state.notes = state.notes.filter((note) => note.id !== id);
    },

    addNote(state, note) {
      state.todos.push(note);
    },
  },
  actions: {},
  modules: {},
});
