<template>
  <div class="premiers-page">
    <h1 class="premiers-page__title">Премьеры 2024 года</h1>
    <div class="premiers-page__line">
      <button-app
        v-for="(month, index) in months"
        :key="month.id"
        @click="changeActiveMonth(month.id)"
        :class="{ active: index === activeIndex }"
      >
        {{ month.title }}
      </button-app>
    </div>

    <Transition name="fade" mode="out-in">
      <PremiersMovies :premieres="premieres" :key="activeIndex" />
    </Transition>
  </div>
</template>

<script>
import { useMoviesStore } from '@/stores/MoviesStore'
import PremiersMovies from '../PremiersMovies.vue'
import ButtonApp from '../ButtonApp.vue'
export default {
  name: 'PremiersPage',
  components: { PremiersMovies, ButtonApp },
  data() {
    return {
      premieres: [],
      activeIndex: 0,
      months: [
        { id: 0, title: 'Январь', month: 'JANUARY' },
        { id: 1, title: 'Февраль', month: 'FEBRUARY' },
        { id: 2, title: 'Март', month: 'MARCH' },
        { id: 3, title: 'Апрель', month: 'APRIL' },
        { id: 4, title: 'Май', month: 'MAY' },
        { id: 5, title: 'Июнь', month: 'JUNE' },
        { id: 6, title: 'Июль', month: 'JULY' },
        { id: 7, title: 'Август', month: 'AUGUST' },
        { id: 8, title: 'Сентябрь', month: 'SEPTEMBER' },
        { id: 9, title: 'Октябрь', month: 'OCTOBER' },
        { id: 10, title: 'Ноябрь', month: 'NOVEMBER' },
        { id: 11, title: 'Декабрь', month: 'DECEMBER' },
      ],
    }
  },
  mounted() {
    const moviesStore = useMoviesStore()
    moviesStore.getPremiers(this.months[this.activeIndex].month).then(() => {
      this.premieres = moviesStore.premieres
    })
  },
  methods: {
    changeActiveMonth(index) {
      this.activeIndex = index
      const moviesStore = useMoviesStore()
      moviesStore.getPremiers(this.months[this.activeIndex].month).then(() => {
        this.premieres = moviesStore.premieres
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.premiers-page {
  padding: 20px 0 80px;
  &__title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  &__line {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
  }

  &__slider {
    height: 620px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>