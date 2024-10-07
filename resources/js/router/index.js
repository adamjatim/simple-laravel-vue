// Import fungsi createRouter dan createWebHistory dari Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import komponen yang akan digunakan untuk rute (halaman yang berbeda)
import HomeComponent from '../pages/HomeComponent.vue';
import AboutComponent from '../pages/AboutComponent.vue';
import UserComponent from '../pages/UserComponent.vue';
import ProfileComponent from '../pages/ProfileComponent.vue';
import NotFoundComponent from '../pages/NotFoundComponent.vue';

// Definisikan daftar rute
const routes = [
    // Route untuk halaman Home ('/')
    { name: 'Home', path: '/', component: HomeComponent },

    // Route untuk halaman About ('/about')
    { name: 'About', path: '/about', component: AboutComponent },

    // Route untuk halaman user ('/user')
    { path: '/user', children: [
        // Route untuk halaman profile user ('/user/:id')
        { name: 'User', path: '/user', component: UserComponent, props: true },

        // Route untuk halaman profile user ('/user/:id')
        { name: 'Profile', path: '/user/:id?', component: ProfileComponent, props: true },
    ] },



    // Route untuk menangani semua path yang tidak sesuai (404 Not Found)
    { path: '/:pathMatch(.*)*', component: NotFoundComponent },
];

// Membuat instance router dengan mode 'history' (URL bersih tanpa hash '#' di URL)
const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(), // Menggunakan mode HTML5 history
    routes, // Menghubungkan router ke daftar rute yang telah dibuat
});

// Mengekspor router agar bisa digunakan di file lain, seperti app.js
export default router;
