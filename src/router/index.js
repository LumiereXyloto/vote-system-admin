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
        path: '/test1',
        name: '测试1',
        component: () => import('../pages/Page1')
      },
      {
        path: '/test2',
        name: '测试2',
        component: () => import('../pages/Page2')
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
