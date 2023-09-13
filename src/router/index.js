import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import Main2 from "../views/main2.vue"
import Main3 from "../views/main3.vue"
import Main4 from '@/views/main4.vue'
import Main5 from '@/views/main5.vue'
import Main6 from '@/views/main6.vue'
import Main7 from '@/views/main7.vue'
import Main8 from '@/views/main8.vue'
import Main9 from '@/views/main9.vue'
import Main10 from '@/views/main10.vue'
import Main11 from '@/views/main11.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Main2',
    name: 'Main2',
    component: Main2
  },
  {
    path: '/Main3',
    name: 'Main3',
    component: Main3
  },
  {
    path: '/Main4',
    name: 'Main4',
    component: Main4
  },
  {
    path: '/Main5',
    name: 'Main5',
    component: Main5
  },
  {
    path: '/Main6',
    name: 'Main6',
    component: Main6
  },
  {
    path: '/Main7',
    name: 'Main7',
    component: Main7
  },
  {
    path: '/Main8',
    name: 'Main8',
    component: Main8
  },
  {
    path: '/Main9',
    name: 'Main9',
    component: Main9
  },
  {
    path: '/Main10',
    name: 'Main10',
    component: Main10
  },
  {
    path: '/Main11',
    name: 'Main11',
    component: Main11
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
