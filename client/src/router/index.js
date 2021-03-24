import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Product',
    component: Product,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next()
      } else {
        next('/products')
      }
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next()
      } else {
        next('/')
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
