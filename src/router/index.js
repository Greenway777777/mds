import Vue from 'vue'
import Router from 'vue-router'
// 导入自己编写的组件
import Home from '../components/Home'
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import Register from '../components/Register'
import LibraryIndex from '../components/library/LibraryIndex'

Vue.use(Router)

export default new Router({
  mode: 'history', // 前端路由模式
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true // 需要拦截
          }
        },
        {
          path: '/library',
          name: 'LibraryIndex',
          component: LibraryIndex,
          meta: {
            requireAuth: true // 需要拦截
          }
        },
        {
          path: '/admin',
          name: 'Admin',
          component: () => import('../components/admin/AdminIndex'),
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
    },
    {
      path: '*',
      component: () => import('../components/pages/Error404')
    }
    // {
    //   path: '/index',
    //   name: 'AppIndex',
    //   component: AppIndex,
    //   meta: {
    //     requireAuth: true // 设置需要前端拦截
    //   }
    // }
  ]
})

// 用于创建默认路由
export const createRouter = routes => new Router({
  mode: 'history', // 前端路由模式
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true // 需要拦截
          }
        },
        {
          path: '/library',
          name: 'LibraryIndex',
          component: LibraryIndex,
          meta: {
            requireAuth: true // 需要拦截
          }
        },
        {
          path: '/admin',
          name: 'Admin',
          component: () => import('../components/admin/AdminIndex'),
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
    },
    {
      path: '*',
      component: () => import('../components/pages/Error404')
    }
    // {
    //   path: '/index',
    //   name: 'AppIndex',
    //   component: AppIndex,
    //   meta: {
    //     requireAuth: true // 设置需要前端拦截
    //   }
    // }
  ]
})
