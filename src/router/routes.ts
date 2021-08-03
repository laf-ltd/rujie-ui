
import { BasicLayout } from '../layouts'

const RouteView = {
  name: 'RouteView',
  render: (h: (arg0: string) => any) => h('router-view')
}


export const WebRouterMap =
  [
    {

      path: '/',
      name: 'index',
      component: BasicLayout,
      meta: { title: '首页' },
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/views/home.vue'),
        },
        {
          path: '/users',
          name: 'users',
          meta: { title: '个人中心' },
          component: () => import('@/views/user/index.vue'),
        }
      ]
    }
  ]


export const AdminRouterMap = [


]

export const BaseRouterMap = [
  {
    path: "/signin",
    name: "signin",
    meta: { title: '用户登录' },
    component: () => import("@/views/auth/signin.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    meta: { title: '用户注册' },
    component: () => import("@/views/auth/signup.vue"),
  }
]

export default [ ...WebRouterMap, ...AdminRouterMap, ...BaseRouterMap ]