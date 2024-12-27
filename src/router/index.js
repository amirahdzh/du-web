import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Programs from "../pages/Programs.vue";
import AddProgram from '../pages/AddProgram.vue';
import Donate from "../pages/Donate.vue";
import Contact from "../pages/Contact.vue";
import Login from '../pages/Login.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/programs", component: Programs },
  { path: '/add-program', component: AddProgram },
  { path: "/donate", component: Donate },
  { path: "/contact", component: Contact },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
