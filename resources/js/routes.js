import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Dashboard = () => import(/* webpackChunkName: "admin-contents" */ './views/admin/contents/dashboard.vue')
const Pending = () => import(/* webpackChunkName: "admin-contents" */ './views/admin/contents/pending.vue')


const routes = [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: Dashboard },
    { path: '/pending', component: Pending },
  ]

const router = new VueRouter({
        mode: 'history',
        routes // short for `routes: routes`
    })

export default router