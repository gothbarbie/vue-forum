<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Forum</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/users" activeClass="active" tag="li"><a>Users</a></router-link>
          <router-link to="/categories" activeClass="active" tag="li"><a>Categories</a></router-link>
        </ul>

        <strong class="navbar-text navbar-right">Members: </strong>

        <ul class="nav navbar-nav navbar-right">
          <li 
            class="dropdown" 
            :class="{ open: isDropdownOpen }"
            @click="isDropdownOpen = !isDropdownOpen">
            <a href="#" 
              class="dropdown-toggle" 
              data-toggle="dropdown" 
              role="button" 
              aria-haspopup="true" 
              aria-expanded="false">{{ user.firstName }} {{ user.lastName }} <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a :href="'users/' + user.id">Profile</a></li>
              <li><a href="#">Topics</a></li>
              <li><a href="#">Posts</a></li>
              <li><a href="#">Log out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },  
      users () {
        return this.$store.getters.users
      }
    }
  }
</script>