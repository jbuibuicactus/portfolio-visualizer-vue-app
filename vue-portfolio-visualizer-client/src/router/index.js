import Router from 'vue-router'
import Vue from 'vue'
import store from "../store";
//import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import AddTutorial from '../components/AddTutorial.vue'

Vue.use(Router)
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
        path: '/register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/Register.vue')
    },
    {
        path: '/login',
        name: 'LogIn',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/LogIn.vue')
    },
    {
      path: '/tutorials',
      name: 'tutorial',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/TutorialsList.vue')
    },
    {
      path: '/tutorial/add',
      name: 'AddTutorial',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/AddTutorial.vue')
    },
    {
      path: '/userprofile',
      name: 'UserProfile',
      component: () => import('../views/ProfilePage.vue')
    }
]
/*
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    

}) */
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (store.getters.isAuthenticated) {
        next();
        return;
      }
      next("/login");
    } else {
      next();
    }
  });
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
      if (store.getters.isAuthenticated) {
        next("/posts");
        return;
      }
      next();
    } else {
      next();
    }
  });
/*
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
*/
export default router
