<template>
  <div>
    <h1>Forum</h1>
    <p>This is an attempt to write a forum from scratch, using JavaScript and the framework Vue.</p>
    <h4>Dependencies</h4>
    <ul>
      <li>vue-router (routing)</li>    
      <li>vuex (state)</li>
      <li>vue-resource (http-resources)</li>
    </ul>
    <p>The database is hosted on Firebase (Google)</p>
    <p>For faster initial design, we use Bootstrap</p>
    <hr>
    <p>The forum has {{ users.length }} members.</p>
  </div>
</template>

<script>
  export default {
    computed: {
      users () {
        return this.$store.getters.users
      }
    }
  }
</script>