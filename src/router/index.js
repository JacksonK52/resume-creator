import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TemplateView.vue')
    },
    {
      path: '/templates/resume-one',
      name: 'resume-one',
      component: () => import('../views/templates/ResumeOneView.vue')
    }
  ]
})

export default router
