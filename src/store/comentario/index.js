import cometarioService from "@/api/cometario";

export const cometario = {
  namespaced: true,
  state: () => ({
    comentarios: [],
  }),
  mutations: {
    setComentarios(state, cometarios) {
      state.comentarios = cometarios;
    },
    esvaziarComentarios(state) {
      state.comentarios = [];
    },
  },
  actions: {
    async pegarComentarios({ commit }) {
      const comentarios = await cometarioService.get();
      commit("setComentarios", comentarios);
    },
    async publicarComentario({ dispatch }, comentario) {
      try {
        await cometarioService.create(comentario);
        dispatch("pegarComentarios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async atualizarComentario({ dispatch }, { id_comentario, comentario }) {
      try {
        await cometarioService.update(id_comentario, comentario);
        dispatch("pegarComentarios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async deletarComentario({ dispatch }, id_comentario) {
      try {
        await cometarioService.delete(id_comentario);
        dispatch("pegarComentarios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
