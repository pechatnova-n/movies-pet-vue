<template>
  <div class="textarea">
    <textarea :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <p v-if="errorMessage" class="textarea__error">{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  name: 'TextareaApp',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
    },
    errorMessage: {
      type: String,
      default: 'Введите корректное значение'
    }
  },
  emits: ['update:modelValue'],
}
</script>
<style lang="scss">
  .textarea {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #000;
      gap: 20px;

      textarea {
        width: 350px;
        height: 240px;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #ccc;
        background: #eee;
        font: 16px/20px 'Arial', sans-serif;
        color: #000;
        outline: none;
      }

      &__error {
        color: red;
      }
    }
</style>