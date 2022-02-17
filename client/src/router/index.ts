import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


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
    path: '/notice',
    name: 'Notice',
    meta: { layout: 'v-main', auth: true },
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/message',
    name: 'Message',
    meta: { layout: 'v-main', auth: true },
    component: () => import('../views/Message.vue')
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    meta: { layout: 'v-main', auth: true },
    component: () => import('../views/Bookmark.vue')
  },
  {
    path: '/list',
    name: 'List',
    meta: { layout: 'v-main', auth: true },
    component: () => import('../views/List.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'v-main', auth: true },
    component: () => import('../views/Profile.vue')
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
  const isAuthorization = !!localStorage.getItem("token")
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
