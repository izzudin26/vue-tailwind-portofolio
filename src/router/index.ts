import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "landingPage",
    component: () => import("@/views/landing.vue")
  },
  {
    path: "/support",
    name: "support",
    component: () => import("@/views/support.vue")
  }
];

export const router = new VueRouter({ routes });
