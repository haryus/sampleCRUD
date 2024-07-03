import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import Login from '../js/template/Login.vue';
import Registration from '../js/template/Registration.vue';

// Import your components using dynamic imports

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => Login,
    beforeEnter: (to, from, next) => {
      if (!store.state.session) {
        next();
      } else {
        next({ name: 'user' });
      }
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
    beforeEnter: (to, from, next) => {
      if (!store.state.session) {
        next();
      } else {
        next({ name: 'login' });
      }
    }
  },
  
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "User" */ './components/User.vue')
  },
  {
    path: '/client',
    name: 'client',
    component: () => import(/* webpackChunkName: "Client" */ './components/Client.vue')
  },
  {
    path: '/interest',
    name: 'interest',
    component: () => import(/* webpackChunkName: "Interest" */ './components/Interest.vue')
  },
  {
    path: '/role',
    name: 'role',
    component: () => import(/* webpackChunkName: "Role" */ './components/Role.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "Error" */ './template/Error.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !store.state.session) {
    next({ name: 'login' });
  } else if (to.name === 'registration' && !store.state.session) {
    // Allow access to registration route if not logged in
    next();
  } else if (!store.state.session && to.name !== 'login') {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
