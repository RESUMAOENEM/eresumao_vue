import axios from "axios";

class FavoritoService {
  async create(favorito) {
    const { data } = await axios.post("api/favoritos/", favorito);
    return data;
  }
  async get(id_resumo) {
    const { data } = await axios.get("api/favoritos/?resumo=" + id_resumo);
    return data;
  }
  async delete(id_favorito) {
    await axios.delete(`api/favoritos/${id_favorito}/`);
  }
}

export default new FavoritoService();
