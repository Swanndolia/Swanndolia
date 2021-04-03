import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: process.env.BASE_URL,
});
export default router;
