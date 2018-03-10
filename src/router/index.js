import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Login from '@/components/common/Login'
import BaseTable from '@/components/page/BaseTable'
import Test from '@/components/page/Test'
import OverView from '@/components/page/OverView'
import Info from '@/components/page/Info'

Vue.use(Router);

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
          redirect: 'overview',
        },
        {
          path: 'info/:item',
          component: Info,
        },
        {
          path: 'BaseTable',
          component: BaseTable
        },
        {
          path: 'overview',
          component: OverView,
        },
        {
          path: 'deviceTable',
          component: null,
        },
        {
          path: 'test',
          component: Test
        },
      ]
    }
  ]
})
