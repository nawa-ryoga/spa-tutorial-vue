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
  base: process.env.BASE_URL,
  routes
})

export default router
