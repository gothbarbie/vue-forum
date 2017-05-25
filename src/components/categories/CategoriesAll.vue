<template>
  <div>
    <h2>Categories</h2>
    <app-category v-for="category in categories" :category="category"></app-category>
  </div>
</template>

<script>
import Category from './Category.vue'

export default {
  components: {
    appCategory: Category
  },
  computed: {
    categories() {
      return this.$store.getters.categories
    }
  }
} 
</script>