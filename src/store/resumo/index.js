import resumoService from "@/api/resumo";

export const resumo = {
  namespaced: true,
  state: () => ({
    totalResumos: [],
  }),
  mutations: {
    setResumos(state, resumos) {
      state.totalResumos = resumos;
    },
    esvaziarResumos(state) {
      state.totalResumos = [];
    },
  },
  actions: {
    async pegarResumos({ commit }) {
      const resumos = await resumoService.buscarResumos();
      commit("setResumos", resumos);
    },
    async pegarResumosPorID({ commit }, id_resumo) {
      const resumos = await resumoService.buscarResumoPorId(id_resumo);
      commit("setResumos", resumos);
    },
    async criarResumo({ dispatch }, resumo) {
      try {
        await resumoService.create(resumo);
        dispatch("pegarResumos");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async atualizarResumo({ dispatch }, { id_resumo, resumo }) {
      try {
        await resumoService.update(id_resumo, resumo);
        dispatch("pegarResumos");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async deletarResumo({ dispatch }, id_resumo) {
      try {
        await resumoService.delete(id_resumo);
        dispatch("pegarResumos");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
