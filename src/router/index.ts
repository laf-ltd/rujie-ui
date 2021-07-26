
import { createRouter, createWebHistory } from "vue-router";
 
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home.vue"),
  },

  {
    path: "/signin",
    name: "signin",
    component: () => import("@/views/auth/signin.vue"),
  },


  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/auth/signup.vue"),
  },
  
  
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/user/index.vue"),
  },

];
 
export default createRouter({
  history: createWebHistory(),
  routes
})
