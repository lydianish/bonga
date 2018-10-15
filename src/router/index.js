import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import create from '@/components/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/create/:name',
      name: 'create',
      component: create
    }
  ]
})
