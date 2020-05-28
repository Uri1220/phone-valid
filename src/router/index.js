import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Auth/Login'
import Home from '../views/Home.vue'
import Register from '../components/Auth/Register.vue'
import Linoleum from '../components/Linoleum/Linoleum.vue'
import Sinteros from '../components/Linoleum/Sinteros.vue'
import Juteks from '../components/Linoleum/Juteks.vue'


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
      path: '/linoleum/',
      name: 'Linoleum',
      component:Linoleum
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
    }
   
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
