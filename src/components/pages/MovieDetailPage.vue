<template>
  <div class="movie-detail">
    <div class="movie-detail__image">
      <img :src=currentMovie.posterUrl :alt=currentMovie.nameRu>
    </div>
    <div class="movie-detail__info">
      <div>
        <h2>{{ currentMovie.nameRu || currentMovie.nameOriginal }}</h2>
      <p>Рейтинг на кинопоиске - {{ currentMovie.ratingKinopoisk }}</p>
      <p class="movie-detail__genres">Жанр: {{ genres }}</p>
      <p>Страна: {{ countries }}</p>
      <p>{{ currentMovie.description }}</p>
      <p>Длительность: {{ currentMovie.filmLength }}</p>
      <p>Год: {{ currentMovie.year }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MovieDetailPage',
  data() {
    return {
      currentMovie: {}
    }
  },
  computed: {
    genres() {
      let ganres = this.currentMovie.genres.map(genre => genre.genre)
      return ganres.toString().split(',').join(', ')
    },
    countries() {
      let countriesList = this.currentMovie.countries.map(count => count.country)
      return countriesList.toString().split(',').join(', ')
    }
  },
  watch: {
    movies: {
      handler() {

        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$route.params.id}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c',
            'Content-Type': 'application/json',
        }}) 
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.currentMovie = json;
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
  .movie-detail {
    display: flex;
    padding-top: 40px;
    padding-bottom: 80px;
    gap: 40px;
    &__image {
      img {
        width: 280px;
        height: 420px;
        border-radius: 20px;
        object-fit: cover;
      }
    }
    &__info {
      
    }
  }
</style>