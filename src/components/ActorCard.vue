<template>
  <router-link :to="actorRoute" class="actor">
    <div class="actor__photo">
      <img :src=actor.posterUrl :alt="actor.nameRu ? actor.nameRu : actor.nameEn">
    </div>
    
    <div class="actor__name">
      <span class="actor__name">{{ actor.nameRu ? actor.nameRu : actor.nameEn}} </span>
      <span v-if="actor.description"> ({{actor.description ? actor.description  : ''}})</span>
    </div>
    
  </router-link >
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
  computed: {
    actorRoute() {
      return {
        name: 'actors',
        params: {
          id: this.actor.staffId
        },
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
  .actor {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 127px;
    &:hover {
      .actor__name {
        color: #4e749c;
      }
    }

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
      transition: all 0.3s ease-in-out;
    }
  }
</style>