<!-- <template>
 <div>
   <h1 class="pa-4 white--text" fluid>
     Bandas
   </h1>
 
   <v-container fluid>
     <v-row dense>
       <v-col v-for="resumo in resumos" :key="resumo.id" cols="3">
         <v-card>
             <v-card-title v-text="resumo.titulo"></v-card-title>
             <v-card-subtitle v-text="resumo.conteudo"></v-card-subtitle>
         </v-card>
       </v-col>
     </v-row>
   </v-container>
 </div>
</template> -->
 
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
          class="palavra list-group-item list-group-item-action bg-transparent text-white text-center h5 b-badge mr-3"
         
        >
          <router-link
            href="Resumos.vue"
            to="/resumos"
            style="text-decoration: none; color: inherit"
            >Resumos</router-link
          >
        </button>
        <button
          class="palavra list-group-item list-group-item-action bg-transparent text-white text-center h5"
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
    <div>
      <!-- Materia artes-->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Artes" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Arte Contemporanea</b-dropdown-item>
      <b-dropdown-item href="#">Arte nos Séculos XV e XVI</b-dropdown-item>
      <b-dropdown-item href="#">Artes Plasticas</b-dropdown-item>
      </b-dropdown>
      </div>              
      <!-- Materia Biologia -->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Biologia" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Sistema Imunitário</b-dropdown-item>
      <b-dropdown-item href="#">Ecossistema</b-dropdown-item>
      <b-dropdown-item href="#">Fundamentos da Ecologia</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Ed. Fisica -->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Educação Física" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Esporte</b-dropdown-item>
      <b-dropdown-item href="#">Espetáculo</b-dropdown-item>
      <b-dropdown-item href="#">Esportes Adaptados</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Filosofia -->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Filosofia" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Aristóteles</b-dropdown-item>
      <b-dropdown-item href="#">Racionalismo Moderno</b-dropdown-item>
      <b-dropdown-item href="#">Filosofia Contemporanea</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Física-->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Física" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Acustica</b-dropdown-item>
      <b-dropdown-item href="#">Resistores</b-dropdown-item>
      <b-dropdown-item href="#">Calometria</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Geografia-->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Geografia" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Questões Ambientais</b-dropdown-item>
      <b-dropdown-item href="#">Climatologia</b-dropdown-item>
      <b-dropdown-item href="#">Urbanização</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia História-->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="História" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Segunda Guerra Mundial</b-dropdown-item>
      <b-dropdown-item href="#">Segundo Reinado</b-dropdown-item>
      <b-dropdown-item href="#">Revolução Industrial</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Inglês -->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Lingua Inglesa" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Interpretação</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Espanhol -->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Lingua Espanhola" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Interpretação</b-dropdown-item>
      </b-dropdown>
      </div>
      <!--Materia-->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="História" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Segunda Guerra Mundial</b-dropdown-item>
      <b-dropdown-item href="#">Segundo Reinado</b-dropdown-item>
      <b-dropdown-item href="#">Revolução Industrial</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Lingua Portuguesa -->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Lingua Portuguesa" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Crase</b-dropdown-item>
      <b-dropdown-item href="#">Redação</b-dropdown-item>
      <b-dropdown-item href="#">Pontuação</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Matemática -->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Matemática" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Problema Primeiro e Segundo Grau</b-dropdown-item>
      <b-dropdown-item href="#">Porcentagem</b-dropdown-item>
      <b-dropdown-item href="#">Funções</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia Lingua Portuguesa -->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Quimica" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Reações Orgânicas</b-dropdown-item>
      <b-dropdown-item href="#">Soluç~oes</b-dropdown-item>
      <b-dropdown-item href="#">Isomeria</b-dropdown-item>
      </b-dropdown>
      </div>
      <!-- Materia sociologia-->
      <div class="col-5 p-1 d-flex justify-content-center">
        <img src="../assets/Cópia de ERESUMAO.png" alt="" width="10%" />
      <b-dropdown id="dropdown-dropright" dropright text="Sociologia" variant="primary" class="center m-3">
      <b-dropdown-item href="#">Cultura</b-dropdown-item>
      <b-dropdown-item href="#">Sociologia Contemporânea</b-dropdown-item>
      <b-dropdown-item href="#">Politica, poder e estado</b-dropdown-item>
      </b-dropdown>
      </div>
    </div>
  </div>
 </template>
  
 <script>
 import ResumoService from "@/api/resumo";
 import axios from "axios";
  
 const resumoService = new ResumoService();
 export default {
  async created() {
    this.resumos = await resumoService.buscarResumos();
  },
  
  data() {
    return {
      resumos: [],
      resumo: {},
      dialog: false,
    };
  },
  
  methods: {
    async buscarResumos() {
      const { data } = await axios.get("api/resumo/");
      this.resumos = data;
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
  
 
 