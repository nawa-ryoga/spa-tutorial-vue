import Vue from 'vue'
import Router from 'vue-router'
import TopComponent from '@/components/TopComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top-component',
      component: TopComponent
    }
  ]
})
