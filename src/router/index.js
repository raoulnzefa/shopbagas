import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produk from '../views/Produk.vue'
import Shopcart from '../views/Shopcart.vue'
import Sukses from '../views/Sukses.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Produk',
    name: 'Produk',
    component: Produk
  },
  {
    path: '/Shopcart',
    name: 'Shopcart',
    component: Shopcart
  },
  {
    path: '/Sukses',
    name: 'Sukses',
    component: Sukses
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
