<template>
    <div class="program-card">
      <h3>{{ program.title }}</h3>
      <p>{{ program.description }}</p>
      <img :src="`http://localhost:3000/uploads/${program.image}`" alt="Program image" />
      <button @click="deleteProgram(program.id)">Hapus Program</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['program'],
    methods: {
      deleteProgram(programId) {
        axios.delete(`http://localhost:3000/api/programs/${programId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Pastikan token valid
          },
        })
        .then(response => {
          console.log('Program deleted:', response.data);
          this.$emit('programDeleted', programId);  // Emit event untuk memberi tahu parent
        })
        .catch(error => {
          console.error('Error deleting program:', error);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .program-card {
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 5px 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  