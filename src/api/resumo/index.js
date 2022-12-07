import axios from "axios";

class ResumoService {
  async create(resumo) {
    const { data } = await axios.post("api/resumos/", resumo);
    return data;
  }
  async get() {
    const { data } = await axios.get("api/resumos/");
    return data;
  }
  async getByID(id_resumo) {
    const { data } = await axios.get("api/resumos/?resumo=" + id_resumo);
    return data;
  }
  async update(id_resumo, resumo) {
    await axios.patch(`api/resumos/${id_resumo}/`, resumo);
  }
  async delete(id_resumo) {
    await axios.delete("api/resumos/", id_resumo);
  }
}

export default new ResumoService();
