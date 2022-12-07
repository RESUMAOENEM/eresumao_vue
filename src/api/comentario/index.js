import axios from "axios";

class ComentarioService {
  async create(comentario) {
    const { data } = await axios.post("api/comentarios/", comentario);
    return data;
  }
  async get() {
    const { data } = await axios.get("api/comentarios/");
    return data;
  }
  async update(id_comentario, comentario) {
    await axios.patch(`api/comentarios/${id_comentario}/`, comentario);
  }
  async delete(id_comentario) {
    await axios.delete(`api/comentarios/${id_comentario}/`);
  }
}

export default new ComentarioService();
