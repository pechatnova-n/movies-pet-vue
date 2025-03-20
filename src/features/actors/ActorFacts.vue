<template>
  <div class="actor-facts">
    <div v-if="localFacts && localFacts.length">
      <ul>
        <li v-for="fact in localFacts" :key="fact.id">{{ fact }}</li>
      </ul>
    </div>
    <div v-else>Фактов об актере не найдено</div>
  </div>
</template>


<script>
import { useMoviesStore } from '@/app/stores/MoviesStore'
export default {
  name: 'ActorFacts',
  data() {
    return {
      localFacts: [],
    }
  },
  mounted() {
    const moviesStore = useMoviesStore()
    this.localFacts = moviesStore.actor.facts
  },
}
</script>


<style lang="scss" scoped>
ul {
  padding: 0;
}
.actor-facts {
  padding: 20px 0 100px;
}
</style>