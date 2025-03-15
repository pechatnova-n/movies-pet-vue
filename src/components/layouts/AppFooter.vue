<template>
  <footer class="footer">
      <div class="footer__content">
        <p>Сайт с фильмами</p>
        <p>© 2025</p>
      </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter'
}
</script>
<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: 80px;
    background: #15202C;

    &__content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

  }
</style>