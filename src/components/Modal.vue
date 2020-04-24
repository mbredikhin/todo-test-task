<template>
  <div class="modal-backdrop" @click.self="$emit('cancel')">
    <div class="modal">
      <p class="modal__description">
        <slot name="description"></slot>
      </p>
      <div class="modal__footer">
        <button
          class="modal__button modal__button--cancel"
          @click="$emit('cancel')"
        >
          <slot name="cancel"></slot>
        </button>
        <button
          class="modal__button modal__button--submit"
          @click="$emit('submit')"
        >
          <slot name="submit"></slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000010;
}

.modal {

  background: white;
  padding: 1.5rem 1.5rem 1rem;
  border-radius: 4px;
  width: 16rem;
  box-shadow: 3px 3px 6px var(--alto), -3px -3px 6px var(--alto);
}

.modal__description {
  font-family: var(--main-font);
  text-align: center;
  line-height: 1.25rem;
  color: var(--gray);
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.modal__footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.modal__button {
  font-family: var(--main-font);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.35rem 1.1rem;
  border: none;
  border-radius: 5px;
  background: none;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px var(--cream), -2px -2px 5px var(--cream);
  }
  &--submit {
    background: var(--blue);
    border: 1px solid var(--blue);
    color: var(--alabaster);
  }
  &--cancel {
    margin-right: 0.75rem;
    color: var(--gray);
    background: white;
    border: 1px solid var(--alto);
  }
}
</style>
