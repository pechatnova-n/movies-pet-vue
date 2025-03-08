<template>
  <SearchMovies/>
  <MovieGenres />
  <MoviesBlock/>
</template>

<script>
import MoviesBlock from '../MoviesBlock.vue';  
import SearchMovies from '../SearchMovies.vue';
import MovieGenres from '../MovieGenres.vue';


export default {
  name: 'MoviesPage',
  components: { MoviesBlock, SearchMovies, MovieGenres }

}
</script>

<style lang="scss" scoped>
</style>