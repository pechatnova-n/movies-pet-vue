<template>
  <SearchMovies  @search="handleSearch" @reset="handleReset" />
  <MoviesBlock :is-loading="isLoading" @changeLoading="toggleLoading" />

</template>

<script>
import { useMoviesStore } from '@/stores/MoviesStore';
import MoviesBlock from '../MoviesBlock.vue';  
import SearchMovies from '../SearchMovies.vue';



export default {
  name: 'MoviesPage',
  components: { MoviesBlock, SearchMovies },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    async handleSearch(searchText) {
      this.isLoading = true
      const moviesStore = useMoviesStore();
      await moviesStore.findMovie(searchText);
      this.isLoading = false
    },
    async handleReset() {
      this.isLoading = true
      const moviesStore = useMoviesStore();
      await moviesStore.getAllMovies();
      this.isLoading = false
    },
    toggleLoading() {
      this.isLoading = !this.isLoading
    }
  }

}
</script>

<style lang="scss" scoped>
</style>