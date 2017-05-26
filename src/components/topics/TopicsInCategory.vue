<template>
  <div>
    <h2>Topics in Category</h2>
    <app-topic v-for="topic in topics" :topic="topic"></app-topic>
  </div>
</template>

<script>
  import Topic from './Topic.vue'

  export default {
    components: {
      appTopic: Topic
    },
    computed: {
      topics() {
        return this.$store.getters.topicsInCategory(this.$route.params.id)
      }
    }
  }
</script>