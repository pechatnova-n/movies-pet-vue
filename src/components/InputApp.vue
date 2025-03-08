<template>
  <div class="input">
    <input :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <p v-if="errorMessage" class="input__error">{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  name: 'InputApp',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
    },
    errorMessage: {
      type: String,
    }
  },
  data() {
    return {
      
    }
  },
  emits: ['update:modelValue']

}
</script>

<style lang="scss" scoped>
  .input {
    position: relative;
    color: #000;

      input {
        width: 350px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #ccc;
        background: #eee;
        padding: 0 20px;
        font: 16px/20px 'Arial', sans-serif;
        color: #000;
        outline: none;
      }

      &__error {
        position: absolute;
        top: 100%;
        left: 0;
        color: red;
      }
    }
</style>