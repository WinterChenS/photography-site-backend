import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    meta: { title: '登录', noCache: true },
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/',
    meta: {title: '管理页', noCache: true},
    component: (resolve) => require(['@/views/admin/home'], resolve),
    hidden: true
  }
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
