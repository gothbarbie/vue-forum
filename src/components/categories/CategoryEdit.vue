<template>
  <div>
    <template v-if="getCategory">
      <h3>Edit <span >{{ category.name }}</span></h3>
      <input 
        type="text"
        class="form-control"
        placeholder="Name"
        v-model="category.name" />
      <input 
        type="text"
        class="form-control"
        placeholder="Description"
        v-model="category.description" />
      <div class="pull-right">
        <button 
          class="btn btn-danger"
          @click="remove">Delete</button>
        <button 
          class="btn btn-primary"
          @click="save"
          :disabled="category.name.length <= 3 || category.description.length <= 3">Save</button>
      </div>
    </template>
    <template v-else>
      <h3>No such category</h3>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        category: {
          id: '',
          name: '',
          description: ''
        }
      }
    },
    computed: {
      getCategory() {
        const catFound = this.$store.getters.category(this.$route.params.id)
        if (catFound) {
          this.category = catFound
          return true
        }
        return false
      }
    },
    methods: {
      save() {
        this.$store.dispatch('updateCategory', this.category)
        this.$router.push('/categories')
      },
      remove() {
        this.$store.dispatch('deleteCategory', this.category.id)
        this.$router.push('/categories')
      }
    }
  }
</script>