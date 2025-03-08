<template>
  <div class="genres">
    <ul class="genres__list">
      <li v-for="genre in genres" :key="genre" class="genres__item">
        <a class="genres__link" href="#" @click.prevent>{{ genre }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieGenres',
  data() {
    return {
      genres: ['Драма', 'Комедия', 'Мультфильм', 'Триллер', 'Документальный', 'Спорт', 'Короткометражка', 'Биография', 'Мюзикл', 'Музыка'],
    }
  },
}
</script>

<style lang="scss" scoped>
.genres {
  margin-bottom: 20px;

  &__list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__item {
    

  }

  &__link {
    font-size: 14px;
    text-decoration: none;
    color: #000;
    padding: 5px 15px;
    border-radius: 15px;
    background-color: #f0f0f0;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #4e749c;
      color: #fff;
    }
    &:active {
      background: #4e749c;
      color: #fff;
    }

  }
}
</style>