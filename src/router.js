import Vue from 'vue'
import Router from 'vue-router'

import RootLayout from '@/views/layout'
import HomePage from './views/homepage/Homepage.vue'
import Login from './views/auth/Login.vue'
import RealtimeInfoLayout from '@/views/realtime_info/layout'
import BuildingList from '@/views/realtime_info/building/BuildingList'
import BuildingProfile from '@/views/realtime_info/building/BuildingProfile'
import FloorList from '@/views/realtime_info/floor/FloorList'
import FloorProfile from '@/views/realtime_info/floor/FloorProfile'
import DormList from '@/views/realtime_info/dorm/DormList'
import DormProfile from '@/views/realtime_info/dorm/DormProfile'
import DormDetail from '@/views/realtime_info/dorm/DormDetail'
import HistoryLayout from '@/views/history/layout'
import BulkControlLayout from '@/views/bulk_control/layout'
import BindDeviceLayout from '@/views/bind_device/layout'
import SettingsLayout from '@/views/settings/layout'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'root',
      component: RootLayout,
      redirect: '/Homepage',
      children: [
        {
          path: '/Homepage',
          name: 'Homepage',
          component: HomePage,
        },
        {
          path: '/RealtimeInfo',
          name: 'RealtimeInfo',
          component: RealtimeInfoLayout,
          redirect: '/RealtimeInfo/buildings',
          children: [
            {
              path: 'buildings',
              name: 'buildings',
              components: {
                'list': BuildingList,
                'profile': BuildingProfile,
              }
            },
            {
              path: 'floors/',
              name: 'floors',
              components: {
                'list': FloorList,
                'profile': FloorProfile,
              },
              query: {
                building_id: Number,
              },
              props: {
                'list': true,
                'profile': true,
              }
            },
            {
              path: 'dorms/',
              name: 'dorms',
              components: {
                'list': DormList,
                'profile': DormProfile,
              },
              query: {
                building_id: String,
                floor: Number,
                dorm_id: Number,
              },
              props: {
                'list': true,
                'profile': true,
              }
            },
            {
              path: 'dormDetail/',
              name: 'dormDetail',
              components: {
                'list': DormList,
                'profile': DormDetail,
              },
              query: {
                building_id: String,
                floor: Number,
                dorm_id: Number,
                search: String,
              },
              props: {
                'list': true,
                'profile': true,
              }
            }
          ]
        },
        {
          path: '/History',
          name: 'History',
          component: HistoryLayout,
        },
        {
          path: '/BulkControl',
          name: 'BulkControl',
          component: BulkControlLayout,
        },
        {
          path: '/BindDevice',
          name: 'BindDevice',
          component: BindDeviceLayout,
        },
        {
          path: '/Settings',
          name: 'Settings',
          component: SettingsLayout,
        }
      ]
    },
  ]
})
