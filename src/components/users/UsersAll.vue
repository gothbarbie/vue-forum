<template>
  <div>
    <h2>Users</h2>
    <app-user v-for="user in users" :user="user"></app-user>
  </div>
</template>

<script>
import User from './User.vue'

export default {
  components: {
    appUser: User
  },
  computed: {
    users() {
      return this.$store.getters.users
    }
  }
} 
</script>