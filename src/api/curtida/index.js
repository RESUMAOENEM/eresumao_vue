import axios from "axios";

class CurtidaService {
  async create(curtida) {
    const { data } = await axios.post("api/curtidas/", curtida);
    return data;
  }
  async get(id_resumo) {
    const { data } = await axios.get("api/curtidas/?resumo=" + id_resumo);
    return data;
  }
  async delete(id_curtida) {
    await axios.delete(`api/curtidas/${id_curtida}/`);
  }
}

export default new CurtidaService();
