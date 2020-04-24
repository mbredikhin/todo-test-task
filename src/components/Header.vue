<template>
  <header class="board-header">
    <router-link :to="`/editor/ `" class="add-note" tag="button">Add new note</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.board-header {
  width: 100%;
  height: 2.75rem;
  border-bottom: 1px solid var(--alto);
}

.add-note {
  display: inline-block;
  height: 2rem;
  padding: 0 1rem;
  border: 1px solid var(--alto);
  border-radius: 4px;
  background-color: #ffffff;
  font-family: var(--main-font);
  font-size: 0.85rem;
  color: var(--gray);
  &:hover {
    cursor: pointer;
    background-color: var(--cream);
  }
  &::before {
    content: '✍️';
    position: relative;
    left: -0.5rem;
    top: -3px;
  }
}
</style>
