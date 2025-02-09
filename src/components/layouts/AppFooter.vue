<template>
  <footer class="footer">
      <div class="footer__content">
        Футер
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
      height: 100%;
    }

  }
</style>