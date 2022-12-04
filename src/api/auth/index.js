import axios from "axios";

class AuthService {
  async register(user) {
    const { data } = await axios.post("auth/registration/", user);
    return data;
  }
  async login(user) {
    const { data } = await axios.post("auth/login/", user);
    return data;
  }
  async get() {
    const { data } = await axios.get("auth/user/");
    return data;
  }
  async changePassword(newPassword) {
    await axios.post("auth/password/change/", newPassword);
  }
  async update(newUser) {
    await axios.patch("auth/user/", newUser);
  }
  async logout() {
    const { data } = await axios.post("auth/logout/");
    return data;
  }
  async delete(inactivatedUser) {
    console.log(inactivatedUser);
    await axios.patch("auth/user/", inactivatedUser);
  }
}

export default new AuthService();
