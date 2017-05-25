<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h3>New Category</h3>
      <div class="form-group">
        <input 
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="category.name" />
      </div>
      <div class="form-group">
        <input 
          type="text"
          class="form-control"
          placeholder="Description"
          v-model="category.description" />
      </div>
        <div class="pull-right">
          <button 
            class="btn btn-primary"
            @click="save"
            :disabled="category.name.length <= 3 || category.description.length <= 3">Create</button>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        category: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      save() {
        this.$store.dispatch('createCategory', this.category)
        this.$router.push('/categories')
      }
    }
  }
</script>