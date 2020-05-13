<template>
  <div id="app">
    <app-navbar />
    <router-view
      :tasks="tasks"
      @onCreateTask="addTask($event)"
      @onChangeTask="changeTask($event)"
    ></router-view>
    <!-- <task-list :tasks="tasks" /> -->
    <!-- <create-task @onCreateTask="addTask($event)" /> -->
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import NavBar from './components/NavBar.vue'
// import TaskList from './components/TaskList.vue'
// import CreateTask from './components/CreateTask.vue';

export default {
  name: 'App',
  components: {
    'app-navbar': NavBar,
    // TaskList,
    // CreateTask,
  },
  data: () => ({
    tasks: [{ id: uuidv4(), name: 'Hello' }],
  }),
  methods: {
    addTask(task) {
      this.tasks.push(task)
    },
    changeTask(task) {
      console.log(task)
      this.tasks = this.tasks.map(item => {
        if (item.id === task.id) {
          return { ...item, ...task }
        }
        return item
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
