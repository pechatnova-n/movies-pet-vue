<template>
  <div class="actor-life">
    <div v-if="localPersonalLife">
      <ul>
        <li v-for="item in localPersonalLife" :key="item.personId">
          <p>Супруг(а): {{ item.name }}</p>
          <p>Дети: {{ item.children }}</p>
        </li>
      </ul>
    </div>
    <div v-else>Информации о личной жизни актера не найдено</div>
  </div>
</template>

<script>
import { useMoviesStore } from '@/app/stores/MoviesStore'
export default {
  name: 'ActorPersonalLife',

  data() {
    return {
      localPersonalLife: [],
    }
  },
  mounted() {
    const moviesStore = useMoviesStore()
    this.localPersonalLife = moviesStore.actor.spouses
  },
}
</script>
<style lang="scss" scoped>
ul {
  padding: 0;
}
.actor-life {
  padding: 20px 0 100px;
}
</style>