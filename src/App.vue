<template>
  <div id="app" class="bg-white min-h-screen text-center">
    <Header />
    <main class="">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Tidak ada style di sini kecuali bawaan global */
/* Styling global */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
