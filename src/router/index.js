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
      path: '/contact',
      name: 'contact',
              component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog.vue')
    },
  ],
  linkActiveClass: 'header__link_current',
  linkExactActiveClass: 'header__link_current',
})

export default router
