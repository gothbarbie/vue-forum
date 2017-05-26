<template>
  <section>

    <div class="row">
      <div class="col-sm-12">
        <h2>Users <span><a href="users/new" class="btn btn-primary">New</a></span></h2>
      </div>
    </div>
  
    <app-user v-for="user in users" :user="user"></app-user>
    
  </section>
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