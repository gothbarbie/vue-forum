<template>
  <section>
    <h3>New User</h3>
    <hr>

    <div class="form-horizontal">      

      <div class="form-group">
        <label class="col-sm-2 control-label" for="inputFirstName">First name</label>
        <div class="col-sm-10">
          <input 
            id="inputFirstName"
            class="form-control"
            type="text"
            placeholder="First name"
            v-model.lazy="user.firstName"
            required />
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label required" for="inputLastName">Last name</label>
        <div class="col-sm-10">
          <input 
            id="inputLastName"
            class="form-control"
            type="text"
            placeholder="Last name"
            required
            v-model.lazy="user.lastName" />
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label required" for="inputEmail">Email</label>
        <div class="col-sm-10">
          <input 
            id="inputEmail"
            class="form-control"
            type="email"
            placeholder="your@email.com"
            required
            v-model.lazy="user.email" />
        </div>
      </div>

      <div class="pull-right">
        <button 
          class="btn btn-primary"
          @click="save">Create</button>
      </div>
           
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: ''
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