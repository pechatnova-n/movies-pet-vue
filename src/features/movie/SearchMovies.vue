<template>
  <div class="search">
    <div class="search__block">
      <InputApp
        type="text"
        v-model="searchText"
        placeholder="Введите название фильма"
        @keyup.enter="handleSearch"
      />
      <ButtonApp :type="button" @click="handleSearch">Найти</ButtonApp>
    </div>
    <ButtonApp :type="button" @click="resetSearch">Показать все фильмы</ButtonApp>
  </div>
</template>

<script>
import ButtonApp from '/src/shared/components/ButtonApp.vue'
import InputApp from '/src/shared/components/InputApp.vue'

export default {
  name: 'SearchMovies',
  components: { ButtonApp, InputApp },
  emits: ['search', 'reset'],
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchText)
      this.searchText = ''
    },
    resetSearch() {
      this.$emit('reset', this.searchText)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
  &__block {
    display: flex;
    gap: 12px;
  }
}
</style>