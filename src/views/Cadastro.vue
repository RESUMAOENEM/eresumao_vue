<template>
  <div class="container-fluid col-50 p-7">
    <div class="row d-flex">
      <div class="col-10 offset-1 bg-white shadow mb-5 border border-raius">
        <div class="row">
          <div
            id="loginLogo"
            class="col-6 p-4 bg-white d-flex justify-content-center"
          >
            <img
              src="../assets/logo.png"
              alt="Logo lista de tarefas"
              width="110%"
            />
          </div>
          <div class="col-6 p-5 color">
            <div id="loginForm">
              <div class="col-14 p-2 d-flex justify-content-center">
                <img src="../assets/foto-perfil.png" alt="" width="70%" />
              </div>
              <div class="form-group">
                <label for="username" class="text-white"><b>Nome:</b></label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  v-model="usuario.username"
                  class="form-control"
                  placeholder="Digite seu username aqui "
                />
              </div>
              <div class="form-group">
                <label for="password" class="text-white"><b>Senha:</b></label>
                <input
                  type="password"
                  name="password1"
                  id="password1"
                  v-model="usuario.password1"
                  class="form-control"
                  placeholder="Digite sua senha aqui "
                />
              </div>
              <div class="form-group">
                <label for="password" class="text-white"
                  ><b>Confirme senha:</b></label
                >
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  v-model="usuario.password2"
                  class="form-control"
                  placeholder="Digite sua senha aqui "
                />
              </div>

              <button
                type="button"
                class="col p-8 btn btn-outline bg text d-flex justify-content-center text-white"
                @click="cadastrar()"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  created() {
    this.unsetHeaders();
  },
  data: () => ({
    usuario: {},
    show: false,
  }),
  methods: {
    ...mapMutations("auth", ["unsetHeaders"]),
    ...mapActions("auth", ["register"]),

    async cadastrar() {
      try {
        await this.register(this.usuario);
        this.$swal({
          icon: "success",
          title: "Redirecionando para a página inicial",
        }).then(() => {
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 1000);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");

* {
  box-sizing: border-box;
}

body {
  background: #dae9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -10px 0 50px;
}

a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #3a5984;
  background-color: #6286b8;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #3a5984;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #6286b8;
  border: none;
  padding: 12px 15px;
  margin: 15px 0;
  width: 70%;
  border-radius: 10px;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 1300px;
  max-width: 100%;
  min-height: 680px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #ffffff;
  background: -webkit-linear-gradient(to right, #fff);
  background: linear-gradient(to right, #ffffff);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 2 2;
  color: #ffffff;
  position: relative;
  left: -50%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  display: flex;
  justify-content: center;
}

.img {
  position: absolute;
}

.color {
  background-color: #3a5984;
}

.color-fundo {
  background-color: #dae9ff;
}

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  font-family: Nunito, sans-serif;
}

#page {
  overflow-x: hidden;
}

.logo {
  color: white;
}

#page.toggled #sidebar {
  margin-left: -15rem;
}

#sidebar {
  min-height: 100vh;
  margin-left: 0;
  width: 15rem;
  -webkit-transition: margin 0.3s ease-out;
  -moz-transition: margin 0.3s ease-out;
  -o-transition: margin 0.3s ease-out;
  transition: margin 0.3s ease-out;
}

#sidebar header {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#page-content {
  min-width: 0;
  width: 100%;
}

#LoginLogo img {
  width: 70%;
}

.ip {
  justify-content: center;
}

.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  text-decoration-color: #6286b8;
}

.bg {
  background-color: #6286b8;
}
</style>
