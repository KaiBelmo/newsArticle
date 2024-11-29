import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from './view/LoginPage.vue';
import UserProfileComponent from './view/UserProfilePage.vue'
import HomepageComponent from './view/HomePage.vue';
import AllAuthorsComponent from './view/AllAuthorsPage.vue';
import ArticleDetails from "./view/ArticleDetails.vue";


const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/user-profile/:email', component: UserProfileComponent },
  { path: '/', component: HomepageComponent },
  { path: '/all-authors', component: AllAuthorsComponent },
  { path: "/articles/:id", name: "ArticleDetails", component: ArticleDetails },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
