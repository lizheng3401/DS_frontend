import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Login from '@/components/common/Login'
import BaseCharts from '@/components/page/BaseCharts'
import BaseTable from '@/components/page/BaseTable'

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
      name: 'Home',
      component: Home,
      children: [
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
