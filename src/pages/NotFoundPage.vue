<template>
  <base-layout>
    <div class="not-found">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__text">Такой страницы не существует</p>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from '@/shared/layouts/BaseLayout.vue'
export default {
  components: { BaseLayout },
  name: 'NotFoundPage',
}
</script>
<style lang="scss" scoped>
.not-found {
  padding: 60px 0 120px;
  &__title {
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  &__text {
    text-align: center;
    font-size: 32px;
  }
}
</style>