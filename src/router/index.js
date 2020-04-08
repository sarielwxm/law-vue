import Vue from 'vue'
import Router from 'vue-router'
// 导入编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
import AdminIndex from '../components/admin/AdminIndex'
import factSearchIndex from '../components/factSearch/factSearchIndex'
import UserProfile from '../components/admin/user/UserProfile'
import Role from '../components/admin/user/Role'

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
        },
        {
          path: '/factSearch',
          name: 'factSearch',
          component: factSearchIndex
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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/admin/userProfile',
          name: 'userProfile',
          component: UserProfile,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin/role',
          name: 'role',
          component: Role
        }
      ]
    }
  ]
})
