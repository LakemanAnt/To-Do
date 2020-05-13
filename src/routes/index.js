import VueRouter from 'vue-router'
import CreateTask from '../components/CreateTask.vue'
import TaskList from '../components/TaskList.vue'
import EditTask from '../components/EditTask.vue'

const routes = [
  { path: '/', component: TaskList },
  { path: '/create', component: CreateTask },
  { path: '/edit/:id', component: EditTask },
]

export default new VueRouter({
  routes,
  mode: 'history',
})
