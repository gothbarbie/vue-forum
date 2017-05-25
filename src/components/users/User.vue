<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>{{ user.firstName }} {{ user.lastName }}</h3>
    </div>
    <div class="panel-body">
      {{ user.email }}
      <div class="pull-right">
        <a :href="'users/' + user.id + '/edit'" class="btn btn-primary">Edit</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['user']
  }
</script>