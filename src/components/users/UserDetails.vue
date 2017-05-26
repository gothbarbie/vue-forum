<template>
  <div>
    <template v-if="getUser">
      <h3>{{ user.firstName }} {{ user.lastName }}</h3>
      
    </template>
    <template v-else>
      <h3>No such user</h3>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          id: '',
          firstName: '',
          lastName: ''
        }
      }
    },
    computed: {
      getUser() {
        this.user = this.$store.getters.user
        return true
      }
    }
  }
</script>