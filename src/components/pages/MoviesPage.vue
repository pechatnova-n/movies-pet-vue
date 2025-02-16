<template>
  <SearchMovies/>
  <MoviesBlock/>
</template>

<script>
import MoviesBlock from '../MoviesBlock.vue';  
import SearchMovies from '../SearchMovies.vue';


export default {
  name: 'MoviesPage',
  components: { MoviesBlock, SearchMovies}
}
</script>

<style lang="scss">
</style>