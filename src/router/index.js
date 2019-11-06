import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../pages/Layout'),
    children: [
      {
        path: '/activity',
        name: '活动管理',
        component: () => import('../pages/Activity')
      },
      {
        path: '/test',
        name: '测试',
        component: () => import('../pages/Test')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
