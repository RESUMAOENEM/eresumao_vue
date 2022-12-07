import comentarioService from "@/api/comentario";

export const comentario = {
  namespaced: true,
  state: () => ({
    comentarios: [],
  }),
  mutations: {
    setComentarios(state, comentarios) {
      state.comentarios = comentarios;
    },
    esvaziarComentarios(state) {
      state.comentarios = [];
    },
  },
  actions: {
    async pegarComentarios({ commit }) {
      const comentarios = await comentarioService.get();
      commit("setComentarios", comentarios);
    },
    async publicarComentario({ dispatch }, comentario) {
      try {
        await comentarioService.create(comentario);
        dispatch("pegarComentarios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async atualizarComentario({ dispatch }, { id_comentario, comentario }) {
      try {
        await comentarioService.update(id_comentario, comentario);
        dispatch("pegarComentarios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async deletarComentario({ dispatch }, id_comentario) {
      try {
        await comentarioService.delete(id_comentario);
        dispatch("pegarComentarios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
