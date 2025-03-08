<template>
  <h1>Страница Актера</h1>
  <loader-app v-if="isLoading" />
  <div  class="actor" v-else>
    <div class="actor__photo">
      <img :src=actor.posterUrl :alt="actor.nameRu ? actor.nameRu : actor.nameEn">
    </div>
    <div class="actor__text">
      <h2>{{ actor.nameRu ? actor.nameRu : actor.nameEn}}</h2>
      <p v-if="actor.profession">{{actor.profession}}</p>
      <p v-if="actor.birthday">Дата рождения: {{actor.birthday}}</p>
      <p v-if="actor.birthplace">Место рождения: {{actor.birthplace}}"></p>
      <a :href="actor.webUrl" about="_blank">Сайт актера: {{actor.webUrl}}</a>
      <p v-if="actor.description"> ({{actor.description ? actor.description  : ''}})</p>
    </div>
    <tabs-app class="actor__tab" :tabs="tabs">
      <router-view>
        11232323
      </router-view>
    </tabs-app>
  </div>
</template>

<script>
import { useMoviesStore } from '@/stores/MoviesStore'
import LoaderApp from '../LoaderApp.vue'
import TabsApp from '../TabsApp.vue'
export default {
  components: { LoaderApp, TabsApp },
  name: 'ActorsPage',
  data() {
    return {
      actor: [],
      isLoading: true,
      tabs: [{title: 'Фильмы', id: 'tab1'}, {title: 'Личная жизнь', id: 'tab2'}, {title: 'Факты', id: 'tab3'}]
    }
  },
  mounted() {
    const moviesStore = useMoviesStore()
    moviesStore.getActor().then(() => {
        this.actor = moviesStore.actor
        this.isLoading = false
      })
  }
}
</script>

<style lang="scss" scoped>
.actor {
  width: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;

  &__photo {
    height: 250px;
    width: 200px;
    border-radius: 16px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__text {

  }

  &__tab {
    width: 100%;
    grid-column: span 2;
  }
}
</style>