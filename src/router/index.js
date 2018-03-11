import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Login from '@/components/common/Login'
import BaseTable from '@/components/page/BaseTable'
import Test from '@/components/page/Test'
import OverView from '@/components/page/OverView'
import UserInfo from '@/components/page/UserInfo'
import DeviceInfo from '@/components/page/DeviceInfo'
import AbnormalNew from '@/components/page/AbnormalNew'
import AbnormalOld from '@/components/page/AbnormalOld'

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
          path: 'info/users',
          component: UserInfo,
        },
        {
          path: 'info/devices',
          component: DeviceInfo
        },
        {
          path: '/index/abnormal/users/new',
          component: AbnormalNew
        },
        {
          path: '/index/abnormal/users/old',
          component: AbnormalOld
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
