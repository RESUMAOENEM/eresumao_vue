import axios from "axios";

axios.defaults.baseURL = "https://eresumao.pythonanywhere.com/";

axios.defaults.headers.common["Content-Type"] = "application/json";
