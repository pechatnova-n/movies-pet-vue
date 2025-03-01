<template>
  <div v-if="isVisible" class="modal__overlay" @click="closeModal">
    <div class="modal__content" @click.stop>
      <button class="modal__close" @click="closeModal">&times;</button>
      <h2 class="modal__title"><slot name="title"></slot></h2>
      <p class="modal__text">
        <slot />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalApp',
  emits: ['close'],
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
.modal {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 80%;
    max-height: 80%;
    min-width: 350px;
    min-height: 200px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    position: relative;
    color: #000;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  &__title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 18px;
  }
}
</style>