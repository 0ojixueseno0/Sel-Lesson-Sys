import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/admin/login",
    name: "loginadmin",
    component: () => import("../views/AdminLogin.vue")
  },
  {
    path: "/user",
    name: "userpage",
    component: () => import("../views/user.vue")
  },
  {
    path: "/admin",
    name: "adminpage",
    component: () => import("../views/admin.vue")
  },
  {
    path: "/admin/console",
    name: "adminConsole",
    component: () => import("../views/console.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
