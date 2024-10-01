import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import komponen halaman untuk routing
import HomeComponent from './pages/HomeComponent.vue';
import AboutComponent from './pages/AboutComponent.vue';

// Definisikan rute
const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent }
];

// Buat instance router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Buat aplikasi Vue
const app = createApp({
    data() {
        return {
            title: 'Laravel vue SPA',
        }
    }
});

// Import komponen Vue dari folder 'components' secara otomatis
Object.entries(import.meta.glob('./components/*.vue', { eager: true })).forEach(([path, definition]) => {
    const componentName = path.split('/').pop().replace(/\.\w+$/, ''); // Ambil nama file sebagai nama komponen
    app.component(componentName, definition.default); // Daftarkan komponen secara otomatis
});

// Gunakan router di aplikasi Vue
app.use(router);

// Mount aplikasi ke elemen dengan id "app"
app.mount('#app');
