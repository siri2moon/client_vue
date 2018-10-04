import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LoginPage from '@/components/pages/Login'
import DashBoard from '@/components/pages/DashBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Hello', component: Hello, meta: {requiresAuth: true}},
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/dashboard', name: 'dashboard', component: DashBoard, meta: {requiresAuth: true}}
  ]
})
