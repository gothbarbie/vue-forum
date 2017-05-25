<template>
  <div>
    <template v-if="getUser">
      <h3>Edit <span >{{ user.name }}</span></h3>
      <input 
        type="text"
        class="form-control"
        placeholder="First name"
        v-model="user.firstName" />
      <input 
        type="text"
        class="form-control"
        placeholder="Last name"
        v-model="user.lastName" />
      <div class="pull-right">
        <button 
          class="btn btn-danger"
          @click="remove">Delete</button>
        <button 
          class="btn btn-primary"
          @click="save"
          :disabled="user.firstName.length <= 3 || user.lastName.length <= 3">Save</button>
      </div>
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
        const userFound = this.$store.getters.users(this.$route.params.id)
        if (userFound) {
          this.user = userFound
          return true
        }
        return false
      }
    },
    methods: {
      save() {
        this.$store.dispatch('updateUser', this.user)
        this.$router.push('/users')
      },
      remove() {
        this.$store.dispatch('deleteUser', this.user.id)
        this.$router.push('/users')
      }
    }
  }
</script>