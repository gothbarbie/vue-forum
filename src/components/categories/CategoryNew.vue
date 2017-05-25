<template>
  <section>
    <h3>New Category</h3>
    <hr>

    <div class="form-horizontal">

      <div class="form-group">
        <label class="col-sm-2 control-label" for="inputName">Name</label>
        <div class="col-sm-10">
          <input 
            type="text"
            class="form-control"
            placeholder="What should it be named?"
            v-model="category.name" />
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label" for="inputFirstName">Description</label>
        <div class="col-sm-10">
          <input 
            type="text"
            class="form-control"
            placeholder="What is this category about?"
            v-model="category.description" />
        </div>
      </div>

      <div class="pull-right">
        <button 
          class="btn btn-primary"
          @click="save"
          :disabled="category.name.length <= 3 || category.description.length <= 3">Create</button>
      </div>
    
    </div>
  </section>
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