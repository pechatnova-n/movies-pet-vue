<template>
  <a href="#" class="movie" @click.prevent="openMovieDetails">
    <img :src=movie.posterUrl :alt=movie.nameRu>
    <p class="movie__name">{{ movie.nameRu || movie.nameOriginal }}</p>
    <span class="movie__rating">{{ movie.ratingKinopoisk }}</span>
  </a>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    openMovieDetails() {
      this.$router.push({ path: `/movies/${this.movie.kinopoiskId}`, params: { id: this.movie.kinopoiskId }})
    }
  }
}
</script>

<style lang="scss">
  .movie {
    position: relative;

    &:hover {
      img {
        box-shadow: 0px 0px 12px 0px rgba(227, 230, 232, 0.4);
      }
    }
    &__name {
      color: #fff;
      font: 16px/20px 'Arial', sans-serif;
    }

    img {
    width: 220px;
    height: 320px;
    border-radius: 20px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }
  &__rating {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #000;
    background-color: #fff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font: 14px/32px 'Arial', sans-serif;
    text-align: center;
    box-shadow: 0px 0px 8px 0px #15202C;
  }
}
  
</style>