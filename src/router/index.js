import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home.vue'
import about from '@/views/about/about.vue'

Vue.use(Router)
export const contentsRouter = [{
  path: '/',
  redirect: 'home',
},
{
  path: '/home',
  name: 'home',
  meta: {
    title: '主页'
  },
  component: () => import('../views/home/home.vue')
},
{
  path: '/about',
  name: 'about',
  meta: {
    title: '关于我们'
  },
  component: () => import('../views/about/about.vue')
},
]
export default new Router({
  // routes,
  routes: contentsRouter,
})