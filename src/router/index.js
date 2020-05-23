import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Auth/Login'
import Home from '../views/Home.vue'
import Register from '../components/Auth/Register.vue'
import Cart from '../views/Cart.vue'
import Book from '../views/Book.vue'
import BookPart from '../views/BookPart.vue'
import ListProduct from '../views/ListProduct.vue'
import MyProducts from '../views/MyProducts.vue'
import Sinteros from '../views/linoleum/Sinteros'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/book/:id',
      name: 'book',
      props:true,
      component: Book
    },
    {
      path: '/book/:bookId/part/:partId',
      name: 'bookPart',
      props:true,
      component: BookPart
    },
  {
    path: '/catalog/linoleum/sinteros/',
    name: 'lin-sinteros',
    component: Sinteros
  },
  
  {
    path: '/linoleum/sinteros/checkout',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/linoleum/sinteros/new',
    name: 'NewProduct',
    component:ListProduct
  },
  {
    path: '/linoleum/sinteros/list',
    name: 'MyProducts',
    component:MyProducts
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
