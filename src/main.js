

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import axios from './axios';  // Import axios instance
import "@fortawesome/fontawesome-free/css/all.css";


const app = createApp(App);

// Menambahkan axios ke Vue global properties
app.config.globalProperties.$axios = axios;

app.use(router).mount('#app');

