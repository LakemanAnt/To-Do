<template>
  <div class="tasks m-2">
    <div v-if="!tasks.length">
      <p class="m-2">
        No tasks
      </p>
    </div>
    <div v-else class="task" v-for="(task, index) in tasks" v-bind:key="index">
      {{ task }}
      <button class="btn btn-danger" @click="deleteTask(index)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    deleteTask(id) {
      console.log(id);
      if (id !== -1) this.tasks.splice(id, 1);
      console.log(this.tasks);
      this.$emit('onDeleteTask', id);
    },
  },
};
</script>

<style scoped>
.tasks {
  background-color: rgb(248, 249, 250);
  border: solid rgb(124, 124, 233) 1px;
  border-radius: 10px;
  margin-left: 50% !important;
  transform: translateX(-50%);
  max-width: 600px;
}
.task {
  padding: 10px;
  font-size: 20px;
  overflow-x: hidden;
}
p {
  color: rgb(124, 124, 233);
  font-size: 20px;
}
</style>
