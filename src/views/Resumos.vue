<template>
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

<style>
</style>