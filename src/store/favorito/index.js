import favoritoService from "@/api/favorito";

export const favorito = {
  namespaced: true,
  state: () => ({
    totalFavoritos: [],
  }),
  mutations: {
    setFavoritos(state, favoritos) {
      state.totalFavoritos = favoritos;
    },
    esvaziarFavoritos(state) {
      state.totalFavoritos = [];
    },
  },
  actions: {
    async pegarFavoritos({ commit }, id_resumo) {
      const favoritos = await favoritoService.get(id_resumo);
      commit("setFavoritos", favoritos);
    },
    async darFavorito({ dispatch }, favorito) {
      try {
        await favoritoService.create(favorito);
        dispatch("pegarFavoritos");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async tirarFavorito({ dispatch }, id_favorito) {
      try {
        await favoritoService.delete(id_favorito);
        dispatch("pegarFavoritos");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
