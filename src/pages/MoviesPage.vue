<template>
  <base-layout>
    <SearchMovies @search="handleSearch" @reset="handleReset" />
    <MoviesBlock :is-loading="isLoading" @changeLoading="toggleLoading" />
  </base-layout>
</template>

<script>
import { useMoviesStore } from '@/app/stores/MoviesStore'
import MoviesBlock from '/src/widgets/MoviesBlock.vue'
import SearchMovies from '/src/features/movie/SearchMovies.vue'
import BaseLayout from '@/shared/layouts/BaseLayout.vue'

export default {
  name: 'MoviesPage',
  components: { MoviesBlock, SearchMovies, BaseLayout },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    async handleSearch(searchText) {
      this.isLoading = true
      const moviesStore = useMoviesStore()
      await moviesStore.findMovie(searchText)
      this.isLoading = false
    },
    async handleReset() {
      this.isLoading = true
      const moviesStore = useMoviesStore()
      await moviesStore.getAllMovies()
      this.isLoading = false
    },
    toggleLoading() {
      this.isLoading = !this.isLoading
    },
  },
}
</script>

<style lang="scss" scoped>
</style>