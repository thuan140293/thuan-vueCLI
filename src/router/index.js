import { createRouter, createWebHistory } from 'vue-router'
import auth from '../middleware/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/homePage.vue'),
    beforeEnter: auth
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/loginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
