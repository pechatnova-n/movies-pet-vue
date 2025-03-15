<template>
  <div class="premiers">
    <loader-app v-if="isLoading" />
    <swiper
      class="premiers__block"
      v-else
      :modules="modules"
      :slides-per-view="3"
      :space-between="30"
      navigation
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000 }"
    >
      <swiper-slide v-for="movie in premieres" :key="movie.id">
        <PremierFilm :movie="movie" />
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import PremierFilm from '/src/features/premier/PremierFilm.vue'
import LoaderApp from '/src/shared/components/LoaderApp.vue'
import 'swiper/swiper-bundle.css';

export default {
  name: 'PremiersMovies',
  components: { PremierFilm, Swiper, SwiperSlide, LoaderApp },
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    }
  },
  props: {
    premieres: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>

.premiers {
  width: 100%;
  height: 620px;
  .swiper {
    width: 100%;
    height: 620px;
  }
  .swiper-slide {
    height: 560px;
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0px; 
  }
}
</style>