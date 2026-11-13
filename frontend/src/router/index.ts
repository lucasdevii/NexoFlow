
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import CadasterView from '../views/auth/CadasterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadaster',
    name: 'cadaster',
    component: CadasterView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
