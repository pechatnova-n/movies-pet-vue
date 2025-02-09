<template>
  <div class="app1">
    <BaseLayout/>
  </div>
  
</template>




<script>
import BaseLayout from './components/layouts/BaseLayout.vue';
export default {
  name: 'App',  
  components: { BaseLayout }
}



</script>




<style lang="scss" scoped>
.app1 {
  width: 100vw;
  height: 100vh;
}
</style>
