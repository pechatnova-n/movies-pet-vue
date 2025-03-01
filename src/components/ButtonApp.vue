<template>
  <div class="button" :class="disabled ? 'disabled' : disabled">
    <button :type="type" :disabled="disabled" >
      <slot>Отправить</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonApp',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    width: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getWidth() {
      return this.width ? this.width + 'px' : 'auto';
    }
  }
}
</script>

<style lang="scss">
  .button {
    button {
    min-width: 75px;
    width: v-bind(getWidth);
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
    &.disabled {
      button {
        background: #3a3d3f;

        &:hover {
          background: #3a3d3f;
        }
      }
    }
  }
</style>