<template>
  <div class="actors-block">
    <ButtonApp @click="showActors">{{
      isShowActors ? 'Скрыть актеров' : 'Показать актеров'
    }}</ButtonApp>
    <Transition name="slide-fade">
      <div v-show="isShowActors" class="actors-block__actors">
        <ActorCard v-for="actor in this.actors" :key="actor.id" :actor="actor" />
      </div>
    </Transition>
  </div>
</template>

<script>
import ActorCard from './ActorCard.vue'
import ButtonApp from './ButtonApp.vue'

export default {
  name: 'ActorsList',
  components: { ActorCard, ButtonApp },

  data() {
    return {
      actors: [],
      isShowActors: false,
    }
  },

  methods: {
    async showActors() {
      if (!this.isShowActors) {
        try {
          await fetch(
            `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${this.$route.params.id}`,
            {
              method: 'GET',
              headers: {
                'X-API-KEY': '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c',
                'Content-Type': 'application/json',
              },
            }
          )
            .then((res) => res.json())
            .then((json) => {
              this.actors = Array.isArray(json) ? json : [json]
              this.isShowActors = true
            })
        } catch (error) {
          console.log(error)
        }
      } else {
        this.isShowActors = false
      }
    },
  },
}
</script>

<style lang="scss">
  .actors-block {
    margin-top: 40px;

    &__actors {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .slide-fade-enter-active {
      transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
      transition: all 0.8s ease-in-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: scale(90%);
      opacity: 0;
    }
  }
</style>