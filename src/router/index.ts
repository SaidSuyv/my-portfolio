import AppLayout from '@/layout/AppLayout.vue'
import About from '@/pages/about.vue'
import Contact from '@/pages/contact.vue'
import Home from '@/pages/home.vue'
import Projects from '@/pages/projects.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: AppLayout,
      redirect: 'home',
      children: [
        { path: 'home', component: Home },
        { path: 'about', component: About },
        { path: 'projects', component: Projects },
        { path: 'contact', component: Contact }
      ]
    }
  ],
})

export default router
