import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home/index';
import About from './components/About/index';
import Task from './components/Task/index';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home },
    {path: '/about', name: 'about', component: About },
    {path: '/task', name: 'task', component: Task },
  ]
});

export default router