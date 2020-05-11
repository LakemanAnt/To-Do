<template>
  <div class="create-task">
    <input
      class="form-control"
      type="text"
      :value="task"
      v-on:input="changeHandler($event)"
      @keydown.enter="addTask"
    />
    <button class="btn btn-primary m-3" :disabled="!this.task" @click="addTask">Add task</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    task: '',
  }),
  methods: {
    changeHandler(event) {
      this.task = event.target.value;
    },
    addTask() {
      if (!this.task) {
        return;
      }
      this.$emit('onCreateTask', this.task);
      this.task = '';
    },
  },
};
</script>

<style>
input {
  margin: 0 auto !important;
  width: 300px !important;
}
</style>
