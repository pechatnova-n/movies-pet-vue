<template>
  <div class="tabs">
    <!-- Кнопки для переключения табов -->
    <div class="tabs__buttons">
      <button-app
        v-for="(tab, index) in tabs"
        :key="tab.id"
        @click="activeTab = index"
        :class="{ active: activeTab === index }"
      >
        {{ tab.title }}
      </button-app>
    </div>

    <!-- Контент табов -->
    <div class="tabs__content">
      <slot/>
    </div>
  </div>
</template>

<script>
import ButtonApp from './ButtonApp.vue';
export default {
  name: 'TabsApp',
    components: { ButtonApp },
  data() {
    return {
      activeTab: 0,
    }
},
props: {
  tabs: {
    type: Array,
    default: () => [],
    required: true
  }
}
}
</script>

<style lang="scss" scoped>
.tabs {
  &__buttons {
    display: flex;
    gap: 10px;
  }
}
</style>