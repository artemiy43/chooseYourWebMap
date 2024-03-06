export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    children: [],
  },
  {
    path: "/why",
    name: "WhyView",
    component: () => import("../views/WhyView.vue"),
    children: [],
  },
  {
    path: "/list",
    name: "ListView",
    component: () => import("../views/ListView.vue"),
    children: [],
  },
];
