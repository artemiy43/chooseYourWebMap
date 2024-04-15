export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/:name",
    name: "MapView",
    component: () => import("../views/MapView.vue"),
    meta: { layout: "AppLayoutHeader" },
  },
  {
    path: "/why",
    name: "WhyView",
    component: () => import("../views/WhyView.vue"),
    meta: { layout: "AppLayoutHeader" },
  },
  {
    path: "/list",
    name: "ListView",
    component: () => import("../views/ListView.vue"),
    meta: { layout: "AppLayoutHeader" },
  },
];
