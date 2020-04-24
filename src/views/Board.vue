<template>
  <div class="board">
    <Header></Header>
    <main class="notes-wrapper">
      <Note
        v-for="note in notes"
        :key="note.id"
        :title="note.title"
        :id="note.id"
        :todoList="note.todos.slice(0, 3)"
      ></Note>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Note from '@/components/Note.vue';

export default {
  components: {
    Header,
    Note,
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
};
</script>

<style lang="scss">
.board {
  user-select: none;
}

.button {
  background-color: #ffffff;
  border: 1px solid var(--alto);
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px var(--alto), -1px -1px 1px var(--alto);
    background-color: var(--alabaster);
  }
}

.notes-wrapper {
  display: flex;
  flex-flow: row wrap;
}
</style>
