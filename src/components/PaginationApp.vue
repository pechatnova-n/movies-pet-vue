<template>
  <div class="pagination">
    <button-app 
      :disabled="currentPage === 1" 
      @click="changePage(currentPage - 1)"
    >
      Назад
    </button-app>

    <span 
      v-for="page in pages" 
      :key="page" 
      @click="changePage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </span>

    <button-app 
      :disabled="currentPage === totalPages" 
      @click="changePage(currentPage + 1)"
    >
      Вперед
    </button-app>
  </div>
</template>

<script>
import ButtonApp from './ButtonApp.vue';

export default {
  name: 'PaginationApp',
  components: {ButtonApp},
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  emits: ['page-changed'],
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    pages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('page-changed', page);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

span {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

span.active {
  font-weight: bold;
  color: #fff;
}
</style>