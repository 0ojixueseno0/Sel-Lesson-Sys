import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Home
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("../views/login.vue")
  // },
  // {
  //   path: "/admin/login",
  //   name: "loginadmin",
  //   component: () => import("../views/AdminLogin.vue")
  // },
  {
    path: "/user",
    name: "userpage",
    component: () => import("../views/user.vue")
  },
  // {
  //   path: "/admin",
  //   name: "adminpage",
  //   component: () => import("../views/admin.vue")
  // },
  // {
  //   path: "/admin/console",
  //   name: "adminConsole",
  //   component: () => import("../views/console.vue")
  // },
  {
    path: "/user/sel",
    name: "SelPage",
    component: () => import("../views/sel.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
