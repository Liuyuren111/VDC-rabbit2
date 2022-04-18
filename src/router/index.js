import { createRouter, createWebHistory } from 'vue-router'
import {routes} from "@/router/router";


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 每次跳转返回顶部
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router
