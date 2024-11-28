import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from './view/LoginPage.vue';
import UserProfileComponent from './view/UserProfilePage.vue'
import HomepageComponent from './view/HomePage.vue';
import AllPostsComponent from './view/AllPostsPage.vue';
import ArticleDetails from "./view/ArticleDetails.vue";


const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/user-profile/:email', component: UserProfileComponent },
  { path: '/', component: HomepageComponent },
  { path: '/all-posts', component: AllPostsComponent },
  { path: "/articles/:id", name: "ArticleDetails", component: ArticleDetails },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
