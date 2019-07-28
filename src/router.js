import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './views/homepage/HomePage.vue'
import Settings from './views/Settings.vue'
import Login from './views/auth/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      alias: '/HomePage',
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
    },
  ]
})
