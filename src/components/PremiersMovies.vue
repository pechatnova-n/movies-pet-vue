<template>
  <div class="premiers">
    <swiper 
    class="premiers__block"
      :modules="modules"
      :slides-per-view="3"
      :space-between="30"
      navigation
      pagination
      :autoplay="{ delay: 3000 }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
    <swiper-slide v-for="movie in premieres" :key="movie.id">
        <PremierFilm :movie="movie" />
      </swiper-slide>
  </swiper>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



import PremierFilm from './PremierFilm.vue';
export default {
  name: 'PremiersMovies',
  components: { PremierFilm, Swiper, SwiperSlide },
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    }
  },
  props: {
    premieres: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import 'swiper/swiper-bundle.css';
  .swiper {
    width: 100%;
    height: 620px;
  }
.swiper-slide{
  height: 560px;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0px;
}
</style>