<template>
  <div class="wrapper">
    <AppHeader/>
    <AppContent class="content">
      <MoviesBlock/>
    </AppContent>
    <AppFooter />
</div>
</template>



<script>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import AppContent from './AppContent.vue';  
import MoviesBlock from '../MoviesBlock.vue';

export default {
  name: 'BaseLayout',
  components: { AppHeader, AppContent, AppFooter,  MoviesBlock }
}
</script>
<style lang="scss" scoped>
  .wrapper {
    width: 100vw;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: auto;
  }

  .content {
    flex-grow: 1;
  }
</style>