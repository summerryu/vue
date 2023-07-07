import { createWebHistory, createRouter } from "vue-router";

import 컴포넌트 from "컴포넌트 경로/파일명";
import 컴포넌트 from "컴포넌트 경로/파일명";

const routes = [
  {
    path: "/",
    component:컴포넌트,
  },
  {
    path:"/경로명",
    component:컴포넌트
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 