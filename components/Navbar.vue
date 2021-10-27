<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>

    <nav class="nav">
      <div class="nav__link">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/About">About</nuxt-link>
      </div>

        <button class="nav__link" @click.prevent="logOut">Log out</button>

    </nav>
  </header>
</template>

<script>
import Logo from "@/components/NuxtLogo";

export default {
  name: "nav-bar",
  methods: {
    logOut() {
      //this.$auth.logout();
      //this.$store.dispatch("logOut");
      //this.$router.push("/login");
    }
  },
  components: {
    Logo
  }
};
</script>

<style scoped>

</style>
