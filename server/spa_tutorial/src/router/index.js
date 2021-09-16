import Vue from 'vue'
import Router from 'vue-router'
import TaskListComponent from '@/components/TaskListComponent'
import TaskCreateComponent from '@/components/TaskCreateComponent'
import TaskShowComponent from '@/components/TaskShowComponent'
import TaskEditComponent from '@/components/TaskEditComponent'
import TopComponent from '@/components/TopComponent'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'top',
    component: TopComponent
  },
  {
    path: '/tasks',
    name: 'task.list',
    component: TaskListComponent
  },
  {
    path: '/tasks/create',
    name: 'task.create',
    component: TaskCreateComponent
  },
  {
    path: '/tasks/:taskId',
    name: 'task.show',
    component: TaskShowComponent,
    props: true
  },
  {
    path: '/tasks/:taskId/edit',
    name: 'task.edit',
    component: TaskEditComponent,
    props: true
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
