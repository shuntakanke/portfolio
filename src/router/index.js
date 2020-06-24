import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '../views/Top.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

import smoothScroll from 'vue-smoothscroll';
Vue.use(smoothScroll);

export default router;
