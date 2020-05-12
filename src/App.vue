<template>
  <div id="app">
    <task-list :tasks="tasks" />
    <create-task @onCreateTask="addTask($event)" />
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import CreateTask from './components/CreateTask.vue';

export default {
  name: 'App',
  components: {
    TaskList,
    CreateTask,
  },
  data: () => ({
    tasks: ['Hello', 'World'],
  }),
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
