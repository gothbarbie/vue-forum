<template>
  <section>
    <div class="row">
      <div class="col-sm-12">
        <h2>Categories <span><a href="categories/new" class="btn btn-primary">New</a></span></h2>
      </div>
    </div>
    <app-category v-for="category in categories" :category="category"></app-category>
  </section>
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