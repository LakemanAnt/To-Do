<template>
  <div class="tasks m-2">
    <div v-if="!tasks.length">
      <p class="m-2">
        No tasks
      </p>
    </div>
    <task
      @onDeleteTask="deleteTask($event)"
      v-else
      v-for="(task, index) in tasks"
      v-bind:key="task.id"
      :index="index"
      :task="task"
    />
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  components: {
    Task,
  },
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    deleteTask(id) {
      const index = this.tasks.findIndex(n => n.id === id)
      if (index !== -1) {
        this.tasks.splice(index, 1)
      }
    },
  },
}
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
p {
  color: rgb(124, 124, 233);
  font-size: 20px;
}
</style>
