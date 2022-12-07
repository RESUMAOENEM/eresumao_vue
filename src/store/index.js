import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import { auth } from "./auth";
import { comentario } from "./comentario";
import { curtida } from "./curtida";
import { favorito } from "./favorito";
import { resumo } from "./resumo";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "eresumao-vue",
});

const modules = {
  auth,
  comentario,
  curtida,
  favorito,
  resumo,
};

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
});
