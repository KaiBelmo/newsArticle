import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from './view/LoginPage.vue';
import UserProfileComponent from './view/UserProfilePage.vue'
import HomepageComponent from './view/HomePage.vue';
import AllPostsComponent from './view/AllPostsPage.vue';

const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/user-profile', component: UserProfileComponent },
  { path: '/', component: HomepageComponent },
  { path: '/all-posts', component: AllPostsComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
