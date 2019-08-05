import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './views/homepage/HomePage.vue'
import Settings from './views/Settings.vue'
import Login from './views/auth/Login.vue'
import StudentOnlineLayout from '@/components/student_online/StudentOnlineLayout'
import BuildingList from '@/components/student_online/building/BuildingList'
import BuildingProfile from '@/components/student_online/building/BuildingProfile'
import FloorList from '@/components/student_online/floor/FloorList'
import FloorProfile from '@/components/student_online/floor/FloorProfile'
import DormList from '@/components/student_online/dorm/DormList'
import DormProfile from '@/components/student_online/dorm/DormProfile'

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
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage,
      alias: '/',
      redirect: '/HomePage/StudentOnline',
      children:[
        {
          path: 'StudentOnline',
          name: 'StudentOnline',
          component: StudentOnlineLayout,
          redirect: '/HomePage/StudentOnline/buidlings',
          children:[
            {
              path: 'buidlings',
              name: 'buidlings',
              components: {
                'list': BuildingList,
                'profile': BuildingProfile,
              },
            },
            {
              path: 'buidlings/:building_id',
              name: 'floors',
              components: {
                'list': FloorList,
                'profile': FloorProfile,
              },
              props: {
                'list': true,
                'profile': true,
              },
            },
            {
              path: 'buidlings/:building_id/:floor_id',
              name: 'floors',
              components: {
                'list': DormList,
                'profile': DormProfile,
              },
              props: {
                'list': true,
                'profile': true,
              },
            },
          ]
        },
      ]
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
    },
  ]
})
