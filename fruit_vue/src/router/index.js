import Vue from 'vue'
import VueRouter from 'vue-router'
import Pie from '../views/Pie'
import Bar from '../views/Bar'
import Tabel from "../views/Tabel"
import Edit from "../views/Edit";
import Add from '../views/Add'
import Serialport from '../views/Serialport'
import Home from '../views/Home'

import Closer from '../views/Closer'
import Breaker from '../views/Breaker'
import Harmony from "@/views/Harmony";

import Settings from '../views/Settings'
import Grid1 from '../views/Grid1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },

  {
    path: '/closer',
    component: Closer
  },
  {
    path: '/breaker',
    component: Breaker
  },
  {
    path: '/harmony',
    component: Harmony
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/grid1',
    component: Grid1
  },

  {
    path: '/bar',
    component: Bar
  },
  {
    path: '/pie',
    component: Pie
  },
  {
    path: '/table',
    component: Tabel
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/serialport',
    component: Serialport
  },
  
  {
    path: '/add',
    component: Add
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
