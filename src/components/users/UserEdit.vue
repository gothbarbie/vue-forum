<template>
  <div>
    <template v-if="getUser">
      <div class="row">
        <div class="col-sm-12">
          <h2>Edit <span>{{ user.firstName }}</span></h2>
        </div>
      </div>

      <hr>
      
      <div class="form-horizontal">
      
        <div class="form-group">
          <label class="col-sm-2 control-label" for="inputFirstName">First name</label>
          <div class="col-sm-10">
            <input 
              type="text"
              class="form-control"
              placeholder="First name"
              v-model="user.firstName" />
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-2 control-label" for="inputFirstName">First name</label>
          <div class="col-sm-10">
            <input 
              type="text"
              class="form-control"
              placeholder="Last name"
              v-model="user.lastName" />
          </div>
        </div>

        <div class="pull-right">
          <button 
            class="btn btn-danger"
            @click="remove">Delete</button>
          <button 
            class="btn btn-primary"
            @click="save"
            :disabled="user.firstName.length <= 3 || user.lastName.length <= 3">Save</button>
        </div>

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
        this.user = this.$store.getters.userById(this.$router.params.id)
        return true
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