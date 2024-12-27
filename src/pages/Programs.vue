<template>
    <section class="programs">
      <h2>Program Kami</h2>
      <div v-if="programs.length > 0" class="program-grid">
        <div class="program-card" v-for="program in programs" :key="program.id">
          <h3>{{ program.title }}</h3>
          <p>{{ program.description }}</p>
          <img :src="`http://localhost:3000/uploads/${program.image}`" alt="Program image" />
        </div>
      </div>
      <p v-else>Loading programs...</p>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        programs: [],  // Menyimpan data program
      };
    },
    mounted() {
      // Mengambil data program dari API backend
      axios.get('http://localhost:3000/api/programs')
        .then(response => {
          this.programs = response.data;  // Simpan data ke dalam state
        })
        .catch(error => {
          console.error('Error fetching programs:', error);
        });
    },
  };
  </script>
  
  <style scoped>
  .programs {
    padding: 20px;
  }
  
  .program-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .program-card {
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  .program-card h3 {
    margin-top: 0;
  }
  
  .program-card p {
    margin-bottom: 0;
  }
  </style>
  