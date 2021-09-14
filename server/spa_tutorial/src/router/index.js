import Vue from 'vue'
import Router from 'vue-router'
import TaskListComponent from '@/components/TaskListComponent'

Vue.use(Router)

const routes = [
  {
    path: '/tasks',
    name: 'task.list',
    component: TaskListComponent
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
