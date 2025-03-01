<template>
  <div class="movies-block">
    <div v-if="movies.length > 0" class="movies-block__full" >
      <MovieCard v-for="movie in paginatedItems" :key="movie.id" :movie="movie"/>
    </div>
    
    <pagination-app 
      v-if="movies.length > 0"
      :total-items="movies.length" 
      :items-per-page="itemsPerPage" 
      :current-page="currentPage" 
      @page-changed="onPageChange"
    />
    <div v-else class="movies-block__empty">Фильмы не найдены</div>
  </div>
</template>




<script>
import { useMoviesStore } from '@/stores/MoviesStore';
import MovieCard from './MovieCard.vue';
import PaginationApp from './PaginationApp.vue';
export default {
  name: 'MoviesBlock',
  components: { MovieCard, PaginationApp },
  data() {
    return {
      movies: [],
      myMovies: [],
      itemsPerPage: 10,
      currentPage: 1
    }
  },

  mounted() {
    const moviesStore = useMoviesStore()
    moviesStore.getAllMovies()
    this.movies = moviesStore.movies
  },
  watch: {
    movies: {
      handler(newValue) {
        const moviesStore = useMoviesStore()
    moviesStore.getAllMovies()
    this.movies = moviesStore.movies
        console.log(newValue);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.movies.slice(start, end);
    }
  },
    methods: {
    onPageChange(page) {
      this.currentPage = page;
    }
  }



  // watch: {
  //   movies: {
  //     handler() {
  //       fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
  //         method: 'GET',
  //         headers: {
  //           'X-API-KEY': '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c',
  //           'Content-Type': 'application/json',
  //       }}) 
  //       .then(res => res.json())
  //       .then(json => {
  //         console.log(json.items);
  //         this.myMovies = json.items;
  //       }

  //       )
  //       .catch(err => console.log(err))
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // }
}
</script>





<style lang="scss">
  .movies-block {
    padding-top: 80px;
    padding-bottom: 120px;

    &__full {
      display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    }

    &__empty {
      font-size: 20px;
      line-height: 28px;
    }
    
  }
</style>