// 첫줄에 기입해야 할 문장
import { createWebHistory, createRouter } from "vue-router";



import ListBoxsComp from "./components/ListBoxsComp.vue"
import MainContainer from "./components/MainContainer.vue"

const routes = [
  {
    path:"/",
    component:MainContainer,
  },
  {
    path:"/doctor/:id",
    component:ListBoxsComp
  },
  {
    path:"/staff/:id",
    component:MainContainer
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 