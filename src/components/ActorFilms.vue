<template>
  <div class="actor-films">
    <div v-if="localFilms.length > 0">
      <ul class="actor-films__list">
        <li v-for="film in localFilms" :key="film.id" class="actor-films__item">
          <p>Название фильма: {{ film.nameRu || film.nameEn }}</p>
          <p v-if="film.profession">Должность: {{ film.profession }}</p>
          <p v-if="film.rating">Рейтинг: {{ film.rating }}</p>
        </li>
      </ul>
    </div>
    <div v-else>Фильмов с участием актера не найдено</div>
  </div>
</template>
<script>
import { useMoviesStore } from '@/stores/MoviesStore'
export default {
  name: 'ActorFilms',
  data() {
    return {
      localFilms: []
    }
  },
    mounted() {
    const moviesStore = useMoviesStore()
    this.localFilms = moviesStore.actor.films
  }
}
</script>
<style lang="scss" scoped>
ul {
  padding: 0;
}
  .actor-films {
    padding: 20px 0 100px;
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    &__item {
      &:nth-child(4n + 1), &:nth-child(4n + 2) {
        background-color: #15202C;
      }
    }
  }
</style>