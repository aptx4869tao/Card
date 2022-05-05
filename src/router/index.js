import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/cardListShow/index.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'CARDLIST',
        component: List
    },
    {
        path: '/cardPage/:name',
        name: 'CARDPAGE',
        component: () => import('../views/cardShow/index.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../components/404/index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
