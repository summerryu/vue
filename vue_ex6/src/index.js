import { createWebHistory, createRouter } from "vue-router";

import MainComp from "./components/MainComp.vue"; // 메인페이지 경로일때 보여줄 중간영역
import StaffComp from "./components/StaffComp.vue"; // 스태프 상세화면 중간영역
import DoctorComp from "./components/DoctorComp.vue"; // 닥터 상세화면 중간영역


const routes = [
  {
    path: "/",
    component:MainComp,
  },
  // url parameter , query string -> 웹브라우저 주소창 데이터값 실어서 전달
  {
    path:"/staff/:id",
    component:StaffComp
  },
  {
    path:"/doctor/:id",
    component:DoctorComp,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 