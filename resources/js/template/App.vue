<template>
  <v-app>
      <nav-Bar v-if="this.$store.state.session == true"></nav-Bar>
      <v-main class="ma-2" :style="{ background: $store.state.session ? '' : 'linear-gradient(to right, #0000ff, #b064dc)' }">
         <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
   import navBar from "./Navbar.vue";
   export default {
      components: {
         navBar,
      }
   }
</script>