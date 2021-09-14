import Vue from 'vue'
import Router from 'vue-router'
import TopComponent from '@/components/TopComponent'
import TaskListComponent from '@/components/TaskListComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top-component',
      component: TopComponent
    },
    {
      path: '/tasks',
      name: 'task.list',
      component: TaskListComponent
    }
  ]
})
