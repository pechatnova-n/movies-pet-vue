<template>
  <div class="search">
    <div class="search__block">
      <InputApp type="text" v-model="searchText" placeholder="Введите название фильма" @keyup.enter="findMovie"/>
      <ButtonApp :type="button" @click="findMovie">Найти</ButtonApp>
    </div>
    <div class="search__filter">Фильтрация</div>
  </div>
</template>

<script>
import { useMoviesStore } from '@/stores/MoviesStore';
import ButtonApp from './ButtonApp.vue';
import InputApp from './InputApp.vue';

export default {
  name: 'SearchMovies',
  components: { ButtonApp, InputApp },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    findMovie() {
      const moviesStore = useMoviesStore()
      moviesStore.findMovie(this.searchText)
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 40px;
    &__block {
      display: flex;
      gap: 20px;
    }
    
  }
</style>