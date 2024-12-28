<template>
  <header class="bg-primary text-black p-4 sticky top-0 z-10">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold">DU</router-link>
      <nav>
        <ul class="hidden md:flex space-x-6 items-center">
          <li>
            <router-link to="/" class="hover:text-secondary">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-secondary"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link to="/programs" class="hover:text-secondary"
              >Programs</router-link
            >
          </li>
          <!-- <li>
            <router-link to="/donate" class="hover:text-secondary"
              >Donate</router-link
            >
          </li> -->
          <li>
            <router-link to="/contact" class="hover:text-secondary"
              >Contact</router-link
            >
          </li>
          <router-link to="/donate" class="hover:text-secondary"
              ><button
            class="bg-secondary hover:bg-yellow-400 text-primary font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Donasi
          </button></router-link
            >
          
        </ul>
        <div class="md:hidden" @click="toggleMenu">
          <button class="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
    <div v-if="isMenuOpen" class="md:hidden mt-4">
      <ul>
        <li>
          <router-link
            to="/"
            class="block py-2 hover:text-secondary"
            @click="closeMenu"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/about"
            class="block py-2 hover:text-secondary"
            @click="closeMenu"
            >About Us</router-link
          >
        </li>
        <li>
          <router-link
            to="/programs"
            class="block py-2 hover:text-secondary"
            @click="closeMenu"
            >Programs</router-link
          >
        </li>
        <li>
          <router-link
            to="/donate"
            class="block py-2 hover:text-secondary"
            @click="closeMenu"
            >Donate</router-link
          >
        </li>
        <li>
          <router-link
            to="/contact"
            class="block py-2 hover:text-secondary"
            @click="closeMenu"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Header",
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style scoped>
/* Optional: Add styles for mobile responsiveness */
</style>
