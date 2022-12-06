import axios from "axios";

export default class ResumoService {
  async buscarResumos() {
    const { data } = await axios.get("api/Resumos/");
    return data;
  }
  async buscarResumoPorId(id) {
    const { data } = await axios.get(`api/Resumos/${id}`);
    return data;
  }
}