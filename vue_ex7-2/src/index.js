import { createWebHistory, createRouter } from "vue-router";

import MainComp from './components/MainComp'
import SubPageComp from './components/SubPageComp'

const routes = [
  {
    path: "/",
    component:MainComp,
  },
  {
    path:"/sub",
    component:SubPageComp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 