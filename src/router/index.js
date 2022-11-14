import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default"),
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/perfil",
        name: "Perfil",
        component: () => import("../views/Perfil.vue"),
      },
      {
        path: "/resumos",
        name: "Resumo",
        component: () => import("../views/Resumos.vue"),
      },
      {
        path: "/resumos/:id",
        name: "ResumoDetail",
        component: () => import("../views/ResumoDetail.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/Blank"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/cadastro",
        name: "Cadastro",
        component: Cadastro,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
