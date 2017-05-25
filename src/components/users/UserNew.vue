<template>
  <section>
    <h3>New User</h3>
    <hr>

    <div class="form-horizontal">      

      <div class="form-group" :class="{'has-error': errors.firstName.length}">
        <label class="col-sm-2 control-label" for="inputFirstName">First name</label>
        <div class="col-sm-10">
          <input 
            id="inputFirstName"
            class="form-control"
            type="text"
            placeholder="First name"
            v-model.lazy="firstName"
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
            v-model.lazy="lastName" />
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
            v-model.lazy="email" />
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
        firstName: '',
        lastName: '',
        email: '',
        errors: {
          firstName: [],
          lastName: [],
          email: []
        }
      }
    },
    watch: {
      firstName: function (new) {    
        if (new.length < 2) {
          errors.firstName.push('First name must be at least 2 characters long')
        }
      },
      lastName: function (new) {
        if (new.length < 2) {
          errors.lastName.push('Last name must be at least 2 characters long')
        }
      },
      email: function (new) {
        if (new.length < 6) {
          errors.email.push('Email must be valid')
        }
      }
    },
    methods: {
      errors() {
        return this.errors.firstName.length || this.errors.lastName.length || this.errors.email.length  
      },
      save() {
        const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
        }
        this.$store.dispatch('createUser', user)
        this.$router.push('/users')
      }
    }
  }
</script>