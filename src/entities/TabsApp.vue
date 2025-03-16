<template>
  <div class="tabs">
    <!-- Кнопки для переключения табов -->
    <div class="tabs__buttons">
      <button-app
        v-for="tab in tabs"
        :key="tab.id"
        @click="setActiveTab(tab.name)"
        :class="{ active: isActive(tab.name) }"
      >
        {{ tab.title }}
      </button-app>
    </div>

    <!-- Контент табов -->
    <div class="tabs__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ButtonApp from '/src/shared/components/ButtonApp.vue'
export default {
  name: 'TabsApp',
  components: { ButtonApp },
  props: {
    tabs: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    setActiveTab(routeName) {
      this.$router.replace({
        name: routeName,
      })
    },
    isActive(routeName) {
      return this.$route.name === routeName;
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  &__buttons {
    display: flex;
    gap: 10px;
  }
}
.tabs__buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tabs__buttons button.active {
  background-color: #007bff;
  color: white;
}
</style>