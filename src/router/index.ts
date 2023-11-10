import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
import ErrorPage from '@/views/error/ErrorPage.vue'
import ProductsPage from '@/views/products/ProductsPage.vue'
import LoginPage from '@/views/login/LoginPage.vue'
import type { TNullable } from '@/types'

const routes = [
  {
    path: '/',
    component: ProductsPage,
    meta: { authNeed: true }
  },
  {
    path: '/login',
    name: 'login',
    meta: { authNeed: false },
    component: LoginPage
  },
  {
    path: '/error-page',
    name: 'error-page',
    component: ErrorPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage
  }
]

type TSavedPosition = {
  top: number
  left: number
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    savedPosition: TNullable<TSavedPosition>
  ) {
    return savedPosition || { left: 0, top: 0 }
  }
})

export default router
