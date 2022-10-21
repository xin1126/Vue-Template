import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layouts/default.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
