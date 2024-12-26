<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/programs">Programs</router-link></li>
          <li><router-link to="/donate">Donate</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style>
  header {
    background-color: #2c3e50;
    padding: 10px 0;
    color: white;
  }
  nav ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
  }
  nav ul li {
    margin: 0 15px;
  }
  nav ul li a {
    text-decoration: none;
    color: white;
  }
  </style>
  