<template>
  <header class="header">
    <div class="header__content">
      <router-link :to="{name: 'index'}" class="header__logo">
        <img src="/src/shared/assets/logo.svg" alt="фильмы">
      </router-link>
      <div class="header__menu">
        <router-link :to="{name: 'premiers'}" >Премьеры</router-link>
        <router-link :to="{name: 'movies'}" >Фильмы</router-link>
        <router-link :to="{name: 'contacts'}" >Контакты</router-link>
        <router-link :to="{name: 'information'}" >Информация</router-link>
      </div>
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
    position: relative;
    width: 100%;
    height: 80px;
    background: #15202C;

    &__content {
      position: relative;
      display: flex;
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      gap: 40px;
      align-items: center;
      justify-content: space-between;
    }
    &__menu {
      display: flex;
      align-items: center;
      gap: 20px;
      a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          opacity: 0.5;
        }
      }
    }
    &__logo  {
      img {
        width: 50px;
        height: 50px;
        object-fit: contain
      }
    }

  }
</style>