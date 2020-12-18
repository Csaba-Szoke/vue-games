import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GameSingle from '../views/GameSingle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:id/:title?',
    name: 'GameSingle',
    component: GameSingle
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
