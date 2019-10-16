import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import SignJoin from './views/SignJoin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }      
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/SignIn.vue')
      }      
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/SignUp.vue')
      }      
    },
    {
      path: '/SignJoin',
      name: 'SignJoin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/SignJoin.vue')
      }      
    },
    {
    path: '/SignJoin',
    name: 'SignJoin',
    component: SignJoin
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
