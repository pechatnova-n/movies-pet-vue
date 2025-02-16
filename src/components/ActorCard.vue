<template>
  <div class="actor">
    <div class="actor__photo">
      <img :src=actor.posterUrl :alt="actor.nameRu ? actor.nameRu : actor.nameEn">
    </div>
    
    <div class="actor__name">
      <span class="actor__name">{{ actor.nameRu ? actor.nameRu : actor.nameEn}} </span>
      <span v-if="actor.description"> ({{actor.description ? actor.description  : ''}})</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ActorCard',
  props: {
    actor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  .actor {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 127px;

    &__photo {
      width: 127px;
      height: 127px;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__name {
      color: #fff;
      font: 14px/18px 'Arial', sans-serif;
      text-align: center;
    }
  }
</style>