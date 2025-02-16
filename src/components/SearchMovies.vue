<template>
  <div class="search">
    <div class="search__block">
      <InputApp modelValue="value" :placeholder="'Введите название фильма'"/>
      <ButtonApp>Найти</ButtonApp>
    </div>
    <div class="search__filter">Фильтрация</div>
  </div>
</template>

<script>
import ButtonApp from './ButtonApp.vue';
import InputApp from './InputApp.vue';

export default {
  name: 'SearchMovies',
  components: { ButtonApp, InputApp },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss">
  .search {
    display: flex;
      justify-content: space-between;
      margin-top: 40px;
    &__block {
      display: flex;
      gap: 20px;
    }
    
  }
</style>