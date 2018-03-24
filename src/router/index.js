import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Login from '@/components/common/Login'
import Test from '@/components/page/Test'
import OverView from '@/components/page/OverView'
import UserInfo from '@/components/page/UserInfo'
import DeviceInfo from '@/components/page/DeviceInfo'
import AbnormalNew from '@/components/page/AbnormalNew'
import AbnormalOld from '@/components/page/AbnormalOld'
import Yesterday from '@/components/page/Yesterday'
import History from '@/components/page/History'

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
          path: '/index/yesterday',
          component: Yesterday
        },
        {
          path: 'overview',
          component: OverView,
        },
        {
          path: '/index/history',
          component: History,
        },
      ]
    },
    {
      path: '/test',
      component: Test
    },
  ]
})
