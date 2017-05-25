<template>
  <form class="form-horizontal">
    <h3>New User</h3>

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

        <div class="control-group">
          <label class="control-label required" for="inputFirstName">First name</label>
          <input 
            id="inputFirstName"
            class="form-control"
            type="text"
            placeholder="First name"
            v-model="user.firstName"
            required />
        </div>

        <div class="control-group">
          <label class="control-label required" for="inputLastName">Last name</label>
          <input 
            id="inputLastName"
            class="form-control"
            type="text"
            placeholder="Last name"
            required
            v-model="user.lastName" />
        </div>

        <div class="form-actions">
          <button 
            class="btn btn-primary"
            @click="save"
            :disabled="user.firstName.length <= 3 || user.lastName.length <= 3">Save</button>
          <button 
            class="btn"
            @click="cancel">Cancel</button>
        </div>
        
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          firstName: '',
          lastName: ''
        }
      }
    },
    methods: {
      save() {
        this.$store.dispatch('createUser', this.user)
        this.$router.push('/users')
      }
    }
  }
</script>