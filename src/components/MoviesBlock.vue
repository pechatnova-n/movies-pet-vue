<template>
  <div>
    <button @click="getMovies">Запросить фильмы</button>
    <div class="movies-block" >
      <MovieCard v-for="movie in myMovies" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>




<script>
import MovieCard from './MovieCard.vue';
export default {
  name: 'MoviesBlock',
  components: { MovieCard },
  data() {
    return {
      movies: [],
      myMovies: []
    }
  },



  watch: {
    movies: {
      handler() {
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
          method: 'GET',
          headers: {
            'X-API-KEY': '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c',
            'Content-Type': 'application/json',
        }}) 
        .then(res => res.json())
        .then(json => {
          console.log(json.items);
          this.myMovies = json.items;
        }

        )
        .catch(err => console.log(err))
      },
      deep: true,
      immediate: true
    }
  }
}
</script>





<style lang="scss">
  .movies-block {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>