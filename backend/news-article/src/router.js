import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from './view/LoginPage.vue';

const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
