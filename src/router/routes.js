export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "AppLayoutDefault" },
    children: [],
  },
  {
    path: "/why",
    name: "WhyView",
    component: () => import("../views/WhyView.vue"),
    meta: { layout: "AppLayoutHeader" },
    children: [],
  },
  {
    path: "/list",
    name: "ListView",
    component: () => import("../views/ListView.vue"),
    meta: { layout: "AppLayoutHeader" },
    children: [],
  },
];
