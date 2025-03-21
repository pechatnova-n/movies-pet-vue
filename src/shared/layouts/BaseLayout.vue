<template>
  <div class="wrapper">
    <AppHeader/>
    <div class="content">
      <slot/>
    </div>
    <AppFooter />
</div>
</template>



<script>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue'; 

export default {
  name: 'BaseLayout',
  components: { AppHeader, AppFooter }
}
</script>
<style lang="scss" scoped>
  .wrapper {
    width: 100vw;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #181818;
    color: #fff;
  }

  .content {
    flex-grow: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
  }
</style>