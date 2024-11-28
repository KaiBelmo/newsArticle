import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from './view/LoginPage.vue';
import UserProfileComponent from './view/UserProfilePage.vue'
import HomepageComponent from './view/Homepage.vue'

const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/user-profile', component: UserProfileComponent },
  { path: '/', component: HomepageComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
