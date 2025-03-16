<template>
  <base-layout>
    <div class="actor-page">
      <h1>Страница Актера</h1>
      <button-app class="actor-page__back" @click="$router.go(-1)">Назад к фильму</button-app>
      <loader-app v-if="isLoading" />
      <div class="actor-page__person" v-else>
        <div class="actor-page__photo">
          <img :src="actor.posterUrl" :alt="actor.nameRu ? actor.nameRu : actor.nameEn" />
        </div>
        <div class="actor-page__text">
          <h2>{{ actor.nameRu ? actor.nameRu : actor.nameEn }}</h2>
          <p v-if="actor.profession">{{ actor.profession }}</p>
          <p v-if="actor.birthday">Дата рождения: {{ actor.birthday }}</p>
          <p v-if="actor.birthplace">Место рождения: {{ actor.birthplace }}</p>
          <a :href="actor.webUrl" about="_blank">Сайт актера: {{ actor.webUrl }}</a>
          <p v-if="actor.description">({{ actor.description ? actor.description : '' }})</p>
        </div>
      </div>
      <tabs-app class="actor-page__tab" :tabs="tabs">
        <router-view></router-view>
      </tabs-app>
    </div>
  </base-layout>
</template>

<script>
import { useMoviesStore } from '@/app/stores/MoviesStore'
import LoaderApp from '/src/shared/components/LoaderApp.vue'
import TabsApp from '/src/entities/TabsApp.vue'
import ButtonApp from '/src/shared/components/ButtonApp.vue'
import BaseLayout from '@/shared/layouts/BaseLayout.vue'

export default {
  components: { LoaderApp, TabsApp, ButtonApp, BaseLayout },
  name: 'ActorsPage',
  data() {
    return {
      actor: [],
      isLoading: true,
      tabs: [
        { title: 'Фильмы', id: 'actors', name: 'films' },
        { title: 'Личная жизнь', id: 'personal-life', name: 'personal-life' },
        { title: 'Факты', id: 'facts', name: 'facts' },
      ],
    }
  },
  async mounted() {
    this.isLoading = true
    const moviesStore = useMoviesStore()
    await moviesStore.getActor(this.$route.params.id)
    this.actor = moviesStore.actor
    this.isLoading = false
  },
}
</script>

<style lang="scss" scoped>
.actor-page {
  &__back {
    margin: 20px 0;
  }
  &__person {
    width: 100%;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 40px;
  }
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
  &__tab {
    margin-top: 40px;
    width: 100%;
    grid-column: span 2;
  }
}
</style>