<template>
  <div class="movie-detail">
    <button-app @click="$router.go(-1)">Назад</button-app>
    <div class="movie-detail__inner">
      <div class="movie-detail__image">
      <img :src="currentMovie.posterUrl" :alt="currentMovie.nameRu" />
    </div>
    <div class="movie-detail__info">
      <div class="movie-detail__description">
        <h2>{{ currentMovie.nameRu || currentMovie.nameOriginal }}</h2>
        <p>Рейтинг на кинопоиске - {{ currentMovie.ratingKinopoisk }}</p>
        <p v-if="genres" class="movie-detail__genres">Жанр: {{ genres }}</p>
        <p>Страна: {{ countries }}</p>
        <p>{{ currentMovie.description }}</p>
        <p>Длительность: {{ currentMovie.filmLength }}</p>
        <p>Год: {{ currentMovie.year }}</p>
      </div>

      <ActorsList />
    </div>
    </div>
    
  </div>
</template>

<script>
import ActorsList from '../ActorsList.vue';
import ButtonApp from '../ButtonApp.vue';

export default {
  name: 'MovieDetailPage',
  components: { ActorsList, ButtonApp},
  data() {
    return {
      currentMovie: {},
      
    }
  },
  computed: {
    genres() {
      let genresInitialArray = this.currentMovie.genres
      let generesArray = []
      if (genresInitialArray) {
        generesArray = genresInitialArray.map((genre) => genre.genre)
        return generesArray.toString().split(',').join(', ')
      } else {
        return false
      }
    },
    countries() {
      let countriesInitialList = this.currentMovie.countries
      if (countriesInitialList) {
        let countriesList = countriesInitialList.map((count) => count.country)
        return countriesList.toString().split(',').join(', ')
      } else {
        return false
      }
    },
  },
  watch: {
    movies: {
      handler() {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$route.params.id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c',
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((json) => {
            this.currentMovie = json
          })
          .catch((err) => console.log(err))
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.movie-detail {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 80px;
  &__inner {
    display: flex;
    gap: 40px;
  }
  &__image {
    img {
      width: 280px;
      height: 420px;
      border-radius: 20px;
      object-fit: cover;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
  }
}
</style>