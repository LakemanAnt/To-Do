<template>
  <div class="task">
    {{ task.name }}
    <button class="btn btn-danger" @click="deleteTask()">Delete</button>
    <router-link class="btn btn-primary" role="button" :to="`/edit/${task.id}`">Edit</router-link>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    // TODO: fix mutation
  },
  methods: {
    deleteTask() {
      this.$emit('onDeleteTask', this.task.id)
    },
  },
}
</script>

<style scoped>
.task {
  padding: 10px;
  font-size: 20px;
  overflow-x: hidden;
}
</style>
