<template>
  <div class="film">
    <img class="film__poster" :src="movie.posterUrl" :alt="movie.nameRu || movie.nameOriginal">
  </div>
</template>
<script>
export default {
  name: 'PremierFilm',
  props: {
    movie: {
    type: [Array, Object],
    required: true
  }
  }
}
</script>
<style lang="scss" scoped>
  .film {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;

    &__poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
</style>