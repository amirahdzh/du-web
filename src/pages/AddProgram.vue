<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-6">Add Program</h2>
        <form @submit.prevent="addProgram">
          <div class="mb-4">
            <label for="title" class="block text-sm font-semibold text-gray-700">Title</label>
            <input
              v-model="title"
              type="text"
              id="title"
              placeholder="Program title"
              class="w-full p-2 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-semibold text-gray-700">Description</label>
            <textarea
              v-model="description"
              id="description"
              placeholder="Program description"
              class="w-full p-2 border border-gray-300 rounded-md mt-1"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <label for="image" class="block text-sm font-semibold text-gray-700">Image</label>
            <input
              type="file"
              id="image"
              @change="onFileChange"
              class="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Program
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        image: null,
      };
    },
    methods: {
      onFileChange(event) {
        this.image = event.target.files[0];
      },
      async addProgram() {
        const token = localStorage.getItem('token');
        if (!token) {
          return alert('You must be logged in first');
        }
  
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('description', this.description);
        formData.append('image', this.image);
  
        try {
          const response = await this.$axios.post('http://localhost:3000/api/programs', formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          });
          alert('Program added successfully');
        } catch (error) {
          alert(error.response?.data?.error || 'Failed to add program');
        }
      },
    },
  };
  </script>
  