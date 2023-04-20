import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let kejianrouter = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('./views/Aboutus.vue'),
    },
    {
      path: '/aboutus/securiities',
      name: 'AboutusDetails',
      component: () => import('./views/AboutusDetails.vue'),
    },
    {
      path: '/investing',
      name: 'investing',
      component: () => import('./views/Invest.vue'),
    },
    {
      path: '/lending',
      name: 'lending',
      component: () => import('./views/Lend.vue')
    },
    {
      path: '/lending/securiities',
      name: 'ledingDetails',
      component: () => import('./views/LendDetails.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('./views/Faq.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/Download.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requireAuth: true
      },
      component: () => import('./views/Admin.vue'),
      children: [{
          path: '/admin/user',
          name: 'user',
          component: () => import('./views/Admin/User.vue')
        },
        {
          path: '/admin/news',
          name: 'new',
          component: () => import('./views/Admin/News.vue')
        },
        {
          path: '/admin/cases',
          name: 'cases',
          component: () => import('./views/Admin/Cases.vue')
        },
        {
          path: '/admin/team',
          name: 'team',
          component: () => import('./views/Admin/Team.vue')
        },
        {
          path: '/admin/course',
          name: 'course',
          component: () => import('./views/Admin/Course.vue')
        },
        {
          path: '/admin/enterprise',
          name: 'enterprise',
          component: () => import('./views/Admin/Enterprise.vue')
        },
        {
          path: '/admin/honor',
          name: 'honor',
          component: () => import('./views/Admin/Honor.vue')
        },
        {
          path: '/admin/dictionary',
          name: 'dictionary',
          component: () => import('./views/Admin/Dictionary.vue')
        },
        {
          path: '/admin/page',
          name: 'page',
          component: () => import('./views/Admin/Page.vue')
        }
      ]
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
kejianrouter.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否登录
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default kejianrouter