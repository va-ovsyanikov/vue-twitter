import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'v-main', auth: true },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/home',
    name: 'Laouyt',
    meta: { layout: 'v-main', auth: true },
    component: () => import('../layouts/v-sub-page-layout.vue'),
    children: [
      {
        path: '/tweet/:id',
        name: 'Tweet',
        component: () => import('../components/tweets/v-tweet-page.vue'),

      },
      {
        path: '/trends/:name',
        name: 'Trends',
        component: () => import('../components/trends/v-trends-page.vue')
      },
    ]
  },

  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'v-auth' },
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthorization = store.getters['IS_AUTH']
  // const isAuthorization = localStorage.getItem("token") || ''
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !isAuthorization) {
    next('/register')
  }else if(!requireAuth && isAuthorization) {
    next('/')
  }else{
    next()
  }
  
})
export default router
