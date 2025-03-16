<template>
  <div class="movies-block">
    <loader-app v-if="isLoading" />
    <div v-else class="movies-block__content">
      <div class="movies-block__full">
        <MovieCard
          v-for="movie in paginatedItems"
          :key="movie.kinopoiskId || movie.filmId"
          :movie="movie"
        />
      </div>

      <pagination-app
        v-if="movies.length > itemsPerPage"
        :total-items="movies.length"
        :items-per-page="itemsPerPage"
        :current-page="currentPage"
        @page-changed="onPageChange"
      />
      <div v-if="emptyResult" class="movies-block__empty">Фильмы не найдены</div>
    </div>
  </div>
</template>

<script>
import { useMoviesStore } from '@/app/stores/MoviesStore'
import MovieCard from '/src/features/movie/MovieCard.vue'
import PaginationApp from '/src/entities/PaginationApp.vue'
import LoaderApp from '/src/shared/components/LoaderApp.vue'
export default {
  name: 'MoviesBlock',
  components: { MovieCard, PaginationApp, LoaderApp },
  emits: ['changeLoading'],
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      itemsPerPage: 10,
      currentPage: 1,
    }
  },

  async mounted() {
    const moviesStore = useMoviesStore()
    await moviesStore.getAllMovies()
    this.$emit('changeLoading', false)
  },
  computed: {
    movies() {
      const moviesStore = useMoviesStore()
      return moviesStore.movies
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      const moviesStore = useMoviesStore()
      return moviesStore.movies.slice(start, end)
    },
    emptyResult() {
      if (this.movies.length === 0) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
    },
  },
}
</script>





<style lang="scss" scoped>
.movies-block {
  padding-top: 20px;
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