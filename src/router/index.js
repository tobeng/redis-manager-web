import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'
import Main from '@/pages/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      meta: {
        name: '首页'
      },
      component: Layout,
      redirect: '/main',
      children: [{
        path: '/main',
        name: '主内容',
        component: Main
      }]
    }
  ]
})
