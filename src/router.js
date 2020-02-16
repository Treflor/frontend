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
//import AuGuard from './AuGuard';


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
            component: () => import('./components/SigninTest.vue')
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
      },
      {
        path: '/newhike',
        name: 'newhike',
        component: () => import('./components/NewHiketest.vue'),
     /*   beforeEnter(to, from, next){
         
          if (store.getters.user) {
            next()
          } else {
            next({
              name: "signin" // back to safety route //
            });
          }
        }  

        */
 
  },
      {
        path: '/guides/:title',
        name: 'Hike',
        props: true,
        component: () => import('./components/Guide.vue')

      },
      
      {
        path: '/waiting/:title',
        name: 'Wait',
        props: true,
        component: () => import('./components/Guide2.vue')

      },

      {
        path: '/waitingtest/:title',
        name: 'Wait',
        props: true,
        component: () => import('./components/SingleGuide.vue')

      },


      {
        path: '/adminpage/waiting',
        name: 'Waiting',
        component: () => import('./components/Waiting.vue')

      },
      {
        path: '/viewguidesfinl',
        name: 'ViewGuidesFinl',
        component: () => import('./components/ViewGuidesfinl.vue')

      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('./components/SignupTest.vue')
    },
    {
      path: '/signtest',
      name: 'signtest',
      component: () => import('./components/SigninTest.vue')
  },
   {
    path: '/imggallery',
    name: 'imggallery',
    component: () => import('./components/ImgGallery1.vue')
},
{
  path: '/newhiketest',
  name: 'newhiketest',
  component: () => import('./components/NewHiketest.vue'),
},
  
  
  
  
  {
    path: '/signuptest',
    name: 'signuptest',
    component: () => import('./components/SignupTest.vue')
},

{
  path: '/waitingtest',
  name: 'waitingtest',
  component: () => import('./components/WaitingTest.vue'),
},

{
  path: '/testimg',
  name: 'TestImg',
  component: () => import('./components/TestImg.vue'),
},
{
  path: '/profile',
  name: 'Profile',
  component: () => import('./components/Profile.vue'),
},

{
  path: '/creategallery',
  name: 'creategallery',
  component: () => import('./components/CreateGallery.vue')
},
{
  path: '/imggallery1',
  name: 'imggallery1',
  component: () => import('./components/ImgGallery1.vue')
},
{
  path: '/convertmap',
  name: 'convert',
  component: () => import('./components/ConvertMap.vue')
},
{
  path: '/passwordforg',
  name: 'passwordforg',
  component: () => import('./components/PasswordForg.vue')
},

       
    ]
});