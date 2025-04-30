import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/exercise1",
          component: () => import("@/views/Exercise1.vue"),
          name: "exercise1",
        },
        {
          path: "/exercise1/solution",
          component: () => import("@/views/Exercise1_fix.vue"),
          name: "exercise1-fix",
        },
        {
          path: "/exercise2",
          component: () => import("@/views/Exercise2.vue"),
          name: "exercise2",
        },
        {
          path: "/exercise2/solution",
          component: () => import("@/views/Exercise2_fix.vue"),
          name: "exercise2-fix",
        },
        {
          path: "/exercise3/:name?",
          component: () => import("@/views/Exercise3.vue"),
          name: "exercise3",
        },
        {
          path: "/exercise3/solution/:name",
          component: () => import("@/views/Exercise3_fix.vue"),
          name: "exercise3-fix",
        },
      ],
    },
  ],
});
