import Vue from 'vue'
import VueRouter from 'vue-router'
// import AuthGuard from './auth-guard'
import Login from '../components/Auth/Login'
import Home from '../views/Home.vue'
import Register from '../components/Auth/Register.vue'
import LinoleumMain from '../components/Linoleum/LinoleumMain.vue'
import Sinteros from '../components/Linoleum/Sinteros.vue'
import Juteks from '../components/Linoleum/Juteks.vue'
import TopLinoleum from '../components/Linoleum/TopLinoleum.vue'
import Checkout from '../components/Checkout'


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
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      //  beforeEnter: AuthGuard
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/linoleum/',
      name: 'LinoleumMain',
      component:LinoleumMain
    },
    {
      path: '/linoleum/sinteros/',
      name: 'Sinteros',
      component:Sinteros
    },
    {
      path: '/linoleum/juteks/',
      name: 'Juteks',
      component:Juteks
    },
    {
      path: '/linoleum/ivc/',
      name: 'TopLinoleum',
      component:TopLinoleum
    }
   
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
