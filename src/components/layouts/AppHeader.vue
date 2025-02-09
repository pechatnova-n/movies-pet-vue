<template>
  <header class="header">
    <div class="header__content">
      Хедер
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
    }

  }
</style>