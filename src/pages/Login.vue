<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-6">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="username" class="block text-sm font-semibold text-gray-700">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              placeholder="Enter username"
              class="w-full p-2 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-semibold text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="Enter password"
              class="w-full p-2 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await this.$axios.post('http://localhost:3000/api/auth/login', {
            username: this.username,
            password: this.password,
          });
  
          // Simpan token di localStorage
          localStorage.setItem('token', response.data.token);
  
          // Arahkan ke halaman program setelah login sukses
          this.$router.push('/add-program');
        } catch (error) {
          alert(error.response?.data?.error || 'Login failed');
        }
      },
    },
  };
  </script>
  