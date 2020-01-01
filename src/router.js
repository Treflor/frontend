/*
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ /* "./views/About.vue")
    }
  ]
});
*/

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


Vue.use(Router);
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
            component: () => import('./views/About.vue')
        },
        {
            path: '/explore',
            name: 'explore',
            component: () => import('./views/Explore.vue')
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () => import('./views/Signin.vue')
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('./views/Join.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import('./views/Maps.vue')
      },
      {
          path: '/admin',
          name: 'admin',
          component: () => import('./views/Admin.vue')
      },
      {
          path: '/adminpage',
          name: 'adminpage',
          component: () => import('./views/AdminPage')
      },
      {
        path: '/viewguides',
        name: 'viewguides',
        component: () => import('./components/ViewGuides.vue')
      }
       
    ]
});