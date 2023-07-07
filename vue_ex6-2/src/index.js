import { createWebHistory, createRouter } from "vue-router";

import MainComp from "./components/MainComp.vue";
import SubComp from "./components/SubComp.vue";

const routes = [
  {
    path: "/",
    component:MainComp,
  },
  {
    path:"/sub/:id",
    component:SubComp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 