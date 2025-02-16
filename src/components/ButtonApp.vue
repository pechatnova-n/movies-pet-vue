<template>
  <div class="button">
    <button :type="type">
      <slot>Отправить</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonApp',
  emits: ['handleSubmit'],
  props: {
    type: {
      type: String,
      default: 'button'
    }
  },
  // methods: {
  //   handleSubmit() {
  //     this.$emit('handleSubmit')
  //   }
  // }
}
</script>

<style lang="scss">
  .button {
    button {
    min-width: 75px;
    padding: 8px 16px;
    height: 40px;
    border-radius: 10px;
    background: #4e749c;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #1c455d;
    }
    }
  }
</style>