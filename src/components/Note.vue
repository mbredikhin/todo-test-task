<template>
  <div class="note">
    <div class="note__list">
      <button class="button button--action">
        <svg
          class="dots"
          viewBox="0 0 515.555 515.555"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"
          />
        </svg>
      </button>

      <div class="note__actions">
        <ul class="actions-list">
          <router-link
            tag="li"
            :to="`/editor/${id}`"
            class="actions-list__item actions-list__item--edit"
            >Edit</router-link
          >
          <li
            class="actions-list__item actions-list__item--delete"
            @click="isModalVisible = true"
          >
            Delete
          </li>
        </ul>
      </div>
      <div class="todo" v-for="todo in todoList" :key="todo.id">
        <div
          class="todo__checkbox"
          :class="{ 'todo__checkbox--checked': todo.checked }"
        >
          <svg
            class="checked"
            v-if="todo.checked"
            viewBox="0 0 515.556 515.556"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"
            />
          </svg>
        </div>
        <span
          class="todo__text"
          :class="{ 'todo__text--done': todo.checked }"
          >{{ todo.text }}</span
        >
      </div>
    </div>

    <div class="note__footer">
      <span class="note__title">{{ title }}</span>
    </div>

    <Modal
      v-if="isModalVisible"
      @cancel="isModalVisible = false"
      @submit="() => removeNoteById(id)"
    >
      <span slot="description">Are you sure want to delete this note?</span>
      <span slot="submit">Submit</span>
      <span slot="cancel">Cancel</span>
    </Modal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    todoList: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    isActionsVisible: false,
    isModalVisible: false,
  }),
  methods: {
    ...mapMutations(['removeNoteById']),
    showActions() {
      this.isActionsVisible = !this.isActionsVisible;
    },
  },
};
</script>

<style lang="scss">
.note {
  display: flex;
  flex-flow: column nowrap;
  min-width: 14rem;
  width: 16vw;
  height: auto;
  align-self: flex-start;
  border-radius: 4px;
  margin: 1.5rem 1rem 0 0;
  box-shadow: 1px 1px 3px var(--alto), -1px -1px 3px var(--alto);
  background-color: var(--alabaster);
  user-select: none;
  &:hover {
    cursor: default;
  }
  &:hover .button--action {
    opacity: 1;
    transition: 0.25s ease-in;
  }
}

.note__list {
  position: relative;
  padding: 0.5rem 1rem;
}

.todo {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.todo__checkbox {
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--light-gray);
  text-align: center;
  border-radius: 3px;
  margin-right: 5%;
  line-height: 1rem;
  &--checked {
    border-color: var(--blue);
    background-color: var(--blue);
  }
}

.checked {
  width: 0.75rem;
  height: 0.75rem;
  fill: white;
}

.todo__text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Oxygen', sans-serif;
  font-size: 0.85rem;
  line-height: 1.75rem;
  color: var(--gray);
}

.todo__text--done {
  color: var(--light-gray);
  text-decoration-line: line-through;
}

.note__footer {
  width: 100%;
  padding: 0 1rem;
  border-top: 1px solid var(--alto);
  background-color: white;
}

.note__title {
  font-family: 'Oxygen', sans-serif;
  font-size: 1rem;
  line-height: 2.75rem;
  color: var(--merlin);
}

.button--action {
  opacity: 0;
  width: 1.85rem;
  height: 1.5rem;
  border-radius: 4px;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  &:hover ~ .note__actions {
    display: inline-block;
  }
}

.dots {
  fill: var(--gray);
  width: 0.85rem;
  height: 100%;
}

.note__actions {
  display: none;
  position: absolute;
  right: -5rem;
  top: 1rem;
  z-index: 10;
  padding: 0.5rem 0;
  background: #ffffff;
  border: 1px solid var(--alto);
  border-radius: 6px;
  box-shadow: 2px 2px 8px var(--alto), -2px -2px 8px var(--alto);
  &:hover {
    display: inline-block;
    cursor: pointer;
  }
}

.actions-list {
  list-style: none;
}

.actions-list__item {
  padding: 0 1rem;
  line-height: 2rem;
  font-family: var(--main-font);
  color: var(--gray);
  font-size: 0.85rem;
  &--edit::before {
    content: '✏️';
    position: relative;
    left: -0.25rem;
  }
  &--delete::before {
    content: '🗑️';
    position: relative;
    left: -0.25rem;
  }
  &:hover {
    background: var(--alabaster);
  }
}
</style>
