import curtidaService from "@/api/curtida";

export const curtida = {
  namespaced: true,
  state: () => ({
    totalCurtidas: [],
  }),
  mutations: {
    setCurtidas(state, curtidas) {
      state.totalCurtidas = curtidas;
    },
    esvaziarCurtidas(state) {
      state.totalCurtidas = [];
    },
  },
  actions: {
    async pegarCurtidas({ commit }, id_resumo) {
      const curtidas = await curtidaService.get(id_resumo);
      commit("setCurtidas", curtidas);
    },
    async darCurtida({ dispatch }, curtida) {
      try {
        await curtidaService.create(curtida);
        dispatch("pegarCurtidas");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async tirarCurtida({ dispatch }, id_curtida) {
      try {
        await curtidaService.delete(id_curtida);
        dispatch("pegarCurtidas");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
