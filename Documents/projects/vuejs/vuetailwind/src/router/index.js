import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },

  // {
  //   path: "/viewfleetowner/:user_id",
  //   name: "fleetowners",
  //   component: () => import("../views/admin/viewfleetowner.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     is_admin: true,
  //     mustBeAdmin: true,
  //   },
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
