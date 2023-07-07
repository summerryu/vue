// 첫줄에 기입해야 할 문장
import { createWebHistory, createRouter } from "vue-router";



import MainContainer from "./components/MainContainer.vue";
import SubContainer from "./components/SubContainer.vue";
import DinnerContainer from "./components/DinnerContainer.vue";
import LunchContainer from "./components/LunchContainer.vue";
import DetailComp from "./components/DetailComp.vue"

const routes = [
  {
    path: "/",
    component:MainContainer,
  },
  {
    path:"/sub",
    component:SubContainer
  },
  {
    path:"/sub/lunch",
    component:LunchContainer
  },
  {
    path:"/sub/dinner",
    component:DinnerContainer
  },
  {
    // :작명 <- 주소값에 데이터를 담아서 전달하는 매개변수[파라미터]
    path:"/detail/:id",
    component:DetailComp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 