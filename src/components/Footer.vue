<template>
    <footer class="footer">
      <div class="footer-content">
        <p>© 2024 Yayasan Daarul Ummahaat. All rights reserved.</p>
        <p>Kontak: +62 123 4567 890 | info@daarulummahaat.org</p>
        <div class="social-media">
          <a href="#"><img src="/assets/icons/facebook.png" alt="Facebook"></a>
          <a href="#"><img src="/assets/icons/instagram.png" alt="Instagram"></a>
          <a href="#"><img src="/assets/icons/twitter.png" alt="Twitter"></a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
  }
  .footer-content {
    max-width: 1200px;
    margin: auto;
  }
  .social-media img {
    width: 24px;
    margin: 0 10px;
  }
  </style>
  