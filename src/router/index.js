import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Login from '@/components/common/Login'
import BaseCharts from '@/components/page/BaseCharts'
import BaseTable from '@/components/page/BaseTable'
import Test from '@/components/page/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/table',
        },
        {
          path: '/test',
          component: Test
        },
        {
          path: '/charts',
          component: BaseCharts
        },
        {
          path: '/table',
          component: BaseTable
        }
      ]
    }
  ]
})
