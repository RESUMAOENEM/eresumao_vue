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
    meta: {
      // auth: true,
    },
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
    meta: {
      auth: false,
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (!store.state.auth.loggedIn) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
