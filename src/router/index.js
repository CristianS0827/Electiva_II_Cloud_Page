import { createRouter, createWebHistory } from "vue-router";

// Import your components here

const routes = [
  {
    path: "/",
    component: () => import("../layout/module.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/home/HomeView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
