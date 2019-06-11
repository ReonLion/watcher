import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      alias: '/HomePage'
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
    }
  ]
})
