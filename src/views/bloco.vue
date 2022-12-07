<template>
    <div>
      <nav class="navbar navbar-expand-custom navbar-mainbg">
      <div class="col-15 p-40">
        <a class="navbar-brand navbar-logo-center col-15" href="#">
          <img src="../assets/home.png" alt="" width="70%" />
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <li class="nav-item"></li>
        <button
          class="palavra list-group-item list-group-item-action bg-transparent text-white text-center h5 b-badge mr-3"
         
        >
          <router-link
            href="Home.vue"
            to="/home"
            style="text-decoration: none; color: inherit"
            >Home</router-link
          >
        </button>
        <br />
        <button
          class="palavra list-group-item list-group-item-action bg-transparent text-white h5 text-center"
          href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZp5a08rPxAhWHlJUCHZiPBrkQFjAAegQIBRAD&url=https%3A%2F%2Fwww.google.com%2Fcalendar&usg=AOvVaw3DL1RYwWlxKdNRzzOWi7iZ"
        >
          Agenda
        </button>
        <button
          class="palavra list-group-item list-group-item-action bg-transparent text-white text-center h5"
        >
          <router-link
            href="Resumos.vue"
            to="/resumos"
            style="text-decoration: none; color: inherit"
            >Resumos</router-link
          >
        </button>
        <button
          class="palavra list-group-item list-group-item-action bg-transparent text-white text-center h5 bg-light"
          variant="light"        
        >
          <router-link
            href="bloco.html"
            to="/bloco"
            style="text-decoration: none; color: inherit"
            >Bloco de Notas</router-link
          >
        </button>
        <button
          class="palavra list-group-item list-group-item-action bg-transparent text-white text-center h5"
        >
          <router-link
            to="/perfil"
            style="text-decoration: none; color: inherit"
            >Perfil</router-link
          >
        </button>
        <button
          @click="logout()"
          class="palavra list-group-item list-group-item-action bg-transparent text-white text-center h5"
        >
          Sair
        </button>
      </div>
    </nav>
    <b-form-textarea
        id="textarea-rows"
        placeholder="Tall textarea"
        rows="8"
    ></b-form-textarea>
    </div>
</template>
  
<script>
import { mapActions } from "vuex";
// import Cabecalho from "../components/Cabecalho.vue";

export default {
  name: "bloco",
  data: () => ({}),
  methods: {
    ...mapActions("auth", ["logout"]),

    async sair() {
      try {
        await this.logout(this.usuario);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped>
@charset "UTF-8";

@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");

@import url("https://fonts.googleapis.com/css?family=Roboto");




body {
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
i {
  margin-right: 10px;
}
.navbar-logo {
  padding: 20px;
  color: #fff;
}
.navbar-mainbg {
  background-color: #3a5984;
  padding: 20px;
}
#navbarSupportedContent {
  overflow: hidden;
  position: relative;
}
#navbarSupportedContent ul {
  padding: 0px;
  margin: 0px;
}
#navbarSupportedContent ul li a i {
  margin-right: 10px;
}
#navbarSupportedContent li {
  list-style-type: none;
  float: left;
}
#navbarSupportedContent ul li a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 15px;
  display: block;
  padding: 20px 20px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}
#navbarSupportedContent > ul > li.active > a {
  color: #5161ce;
  background-color: transparent;
  transition: all 0.7s;
}
#navbarSupportedContent a:not(:only-child):after {
  content: "\f105";
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 14px;
  font-family: "Font Awesome 5 Free";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  transition: 0.5s;
}
#navbarSupportedContent .active > a:not(:only-child):after {
  transform: rotate(90deg);
}
.hori-selector {
  display: inline-block;
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 10px;
}
.hori-selector .right,
.hori-selector .left {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #fff;
  bottom: 10px;
}
.hori-selector .right {
  right: -25px;
}
.hori-selector .left {
  left: -25px;
}
.hori-selector .right:before,
.hori-selector .right:before {
  bottom: 0;
  right: -25px;
}
.hori-selector .left:before {
  bottom: 0;
  left: -25px;
}

@media (min-width: 992px) {
  .navbar-expand-custom {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .navbar-expand-custom .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .navbar-expand-custom .navbar-toggler {
    display: none;
  }
  .navbar-expand-custom .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
}

@media (max-width: 991px) {
  #navbarSupportedContent ul li a {
    padding: 12px 30px;
  }
  .hori-selector {
    margin-top: 0px;
    margin-left: 10px;
    border-radius: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .hori-selector .left,
  .hori-selector .right {
    right: 10px;
  }
  .hori-selector .left {
    top: -25px;
    left: auto;
  }
  .hori-selector .right {
    bottom: -25px;
  }
  .hori-selector .left:before {
    left: -25px;
    top: -25px;
  }
  .hori-selector .right:before {
    bottom: -25px;
    left: -25px;
  }
}

outra parte body {
  background: #eeeeee;
}

section {
  float: left;
  padding-top: 50px;
  padding-bottom: 100px;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}

#icon-wrapper {
  width: 100%;
  float: left;
  height: 350px;
}

.icons1 {
  width: 25%;
  float: left;
  position: relative;
  margin-left: 25%;
}
.icons2 {
  width: 25%;
  float: left;
  position: relative;
  margin-left: 50%;
}
.icons3 {
  width: 25%;
  float: left;
  position: relative;
  margin-left: 100%;
}

.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.color {
  text-decoration-color: #3a5984;
  text-emphasis-color: #5a83bb;
}

</style>
