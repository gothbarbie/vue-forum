<template>
  <article class="panel panel-default">
    <header class="panel-heading">
      <div class="row">
        <div class="col-sm-2">
          <h3 class="panel-title">{{ category.name }}</h3>
          {{ category.description }}
        </div>
        <div class="col-sm-10">
          <a :href="'categories/' + category.id + '/edit'" class="btn btn-primary pull-right">Edit</a>
        </div>
      </div>
    </header>
    <div class="panel-body">
      <table class="table">
        <caption>Topics</caption>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Description</th>
            <th>Replies</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="topic in topics">
            <td>{{ topic.name }}</td>
            <td>{{ topic.description }}</td>
            <td>12</td>
            <td><a :href="'topics/' + topic.id + '/edit'" class="btn btn-xs btn-primary">Edit</a></td>
            <td><a :href="'topics/' + topic.id + '/delete'" class="btn btn-xs btn-danger">Delete</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer class="panel-footer">
      <div class="row">
        <div class="col-sm-12">
          <a :href="'categories/' + category.id + '/delete'" class="btn btn-danger pull-right">Delete</a>
        </div>
      </div>
    </footer>
  </article>
</template>

<script>
  export default {
    props: ['category'],
    computed: {
      topics() {
        return this.$store.getters.topicsInCategory(this.category.id)
      }
    }
  }
</script>