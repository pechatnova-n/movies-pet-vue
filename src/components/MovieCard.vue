<template>
  <article>
    <img :src=movie.posterUrl :alt=movie.nameRu>
    <p>{{ movie.nameRu || movie.nameOriginal }}</p>
  </article>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  img {
    width: 200px;
    height: 300px;
    border-radius: 20px;
  }
  p {
    font-size: 20px;
    color: #fff;
  }
</style>