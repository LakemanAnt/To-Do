<template>
  <div class="create-task">
    <input
      class="form-control"
      type="text"
      :value="task.name"
      v-on:input="changeHandler($event)"
      @keydown.enter="addTask"
    />
    <button class="btn btn-primary m-3" :disabled="!this.task.name" @click="addTask">
      Add task
    </button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data: () => ({
    task: { id: '', name: '' },
  }),
  methods: {
    changeHandler(event) {
      this.task.name = event.target.value
    },
    addTask() {
      if (!this.task.name) {
        return
      }
      this.task.id = uuidv4()
      this.$emit('onCreateTask', this.task)
      // this.task = '';
      this.$router.push('/')
    },
  },
}
</script>

<style>
input {
  margin: 0 auto !important;
  width: 300px !important;
}
</style>
