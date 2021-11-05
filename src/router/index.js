import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path:'/main',
    name:'Main',
    component: () => import('../views/movieMain.vue')
  },
  {
    path:'/second',
    name:'Second',
    component: () => import('../views/movieSecond.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
