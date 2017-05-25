<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>{{ category.name }}</h3>
    </div>
    <div class="panel-body">
      {{ category.description }}
      <div class="pull-right">
        <a :href="'categories/' + category.id + '/edit'" class="btn btn-primary">Edit</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['category']
  }
</script>