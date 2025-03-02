<template>
  <header class="header">
    <div class="header__content">
      <router-link :to="{name: 'premiers'}" >Премьеры</router-link>
      <router-link :to="{name: 'movies'}" >Фильмы</router-link>
      <router-link :to="{name: 'actors'}" >Актеры</router-link>
      <router-link :to="{name: 'contacts'}" >Контакты</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 80px;
    background: #15202C;

    &__content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 100%;
      gap: 40px;
      justify-content: center;
      
      a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          opacity: 0.5;
        }
      }
    }

  }
</style>