import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompletedView from '../views/CompletedView.vue'
import TopView from '../views/TopView.vue'
import ShopView from '../views/ShopView.vue'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/completed',
        name: 'completed',
        component: CompletedView
    },
    {
        path: '/top',
        name: 'top',
        component: TopView
    },
    {
        path: '/maxwellMysteries',
        name: 'maxwellMysteries',
        component: ShopView
    },
    {
        path: '/maxwellMysteries/product/:id',
        name: 'product',
        component: ProductView
    }
]

const router = new VueRouter({
    routes,

    scrollBehavior () {
        return { x: 0, y: 0 }
      }
})

export default router
