import Vue from 'vue'
import Router from 'vue-router'
// 导入编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Register from '../components/Register'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 下面都是固定的写法
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: 'index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
