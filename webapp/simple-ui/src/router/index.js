import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fun-tools',
    name: 'fun',
    component: () => import(/* webpackChunkName: "fun" */ '../views/FunView.vue')
  },  
  {
    path: '/mia-tools',
    name: 'mia-tools',
    component: () => import(/* webpackChunkName: "mia-tools" */ '../views/MiaView.vue')
  },
  {
    path: '/mi-tools',
    name: 'mi-tools',
    component: () => import(/* webpackChunkName: "mi-tools" */ '../views/MiView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
