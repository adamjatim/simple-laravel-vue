// Import fungsi createRouter dan createWebHistory dari Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import komponen yang akan digunakan untuk rute (halaman yang berbeda)
import HomeComponent from '../pages/HomeComponent.vue';
import AboutComponent from '../pages/AboutComponent.vue';
import NotFoundComponent from '../pages/NotFoundComponent.vue';

// Definisikan daftar rute
const routes = [
    // Route untuk halaman Home ('/')
    { path: '/', component: HomeComponent },

    // Route untuk halaman Home ('/home')
    { path: '/home', component: HomeComponent },

    // Route untuk halaman About ('/about')
    { path: '/about', component: AboutComponent },

    // Route untuk menangani semua path yang tidak sesuai (404 Not Found)
    { path: '/:pathMatch(.*)*', component: NotFoundComponent }
];

// Membuat instance router dengan mode 'history' (URL bersih tanpa hash '#' di URL)
const router = createRouter({
    history: createWebHistory(), // Menggunakan mode HTML5 history
    routes, // Menghubungkan router ke daftar rute yang telah dibuat
});

// Mengekspor router agar bisa digunakan di file lain, seperti app.js
export default router;
