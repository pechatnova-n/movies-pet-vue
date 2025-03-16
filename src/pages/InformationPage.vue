<template>
  <side-bar-layout>
    <div class="information-page">
      <h1 class="information-page__title">История кинематоргарафа</h1>
      <information-text/>
    </div>
  </side-bar-layout>
</template>
<script>
import SideBarLayout from '@/shared/layouts/SideBarLayout.vue'
import InformationText from '@/features/information/InformationText.vue'
export default {
  components: { SideBarLayout, InformationText },
}
</script>
<style lang="scss" scoped>
.information-page {
&__title {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
}
}
</style>