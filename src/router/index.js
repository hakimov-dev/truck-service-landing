import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import NotFound from '../components/404'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
