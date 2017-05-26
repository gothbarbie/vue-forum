<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/partials/Header.vue'

  export default {
    components: {
      appHeader: Header
    },
    created () {
      this.$store.dispatch('loadCategories')
      this.$store.dispatch('loadTopics')
      this.$store.dispatch('loadUsers')
      this.$store.dispatch('setUser', 1)
    }
  }
</script>

<style>
  body {
    padding: 30px;
  }
</style>
