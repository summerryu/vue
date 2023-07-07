import { createWebHistory, createRouter } from "vue-router";

import MainComp from "./components/main/MainComp" //메인 중간영역
import IntroComp from "./components/intro/SubIntro" // 서브페이지 중간영역

const routes = [
  {
    path: "/",
    component:MainComp,
  },
  {
    path:"/intro",
    component:IntroComp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 