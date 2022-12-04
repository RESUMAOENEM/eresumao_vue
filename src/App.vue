<template>
  <router-view />
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  created() {
    this.loggedIn ? this.setHeaders() : this.unsetHeaders();
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapMutations("auth", ["setHeaders", "unsetHeaders"]),
  },
};
</script>
