// // require('./bootstrap');
// import axios from 'axios';

// Import fungsi createApp dari Vue
import { createApp } from 'vue';

// Import router yang sudah kamu buat di file terpisah (index.js)
import router from './router';

// Import komponen lain seperti Header dan Footer
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

// Membuat instance aplikasi Vue
const app = createApp({
    // Data yang digunakan di dalam aplikasi
    data() {
        return {
            title: 'Laravel vue SPA', // Judul aplikasi
        };
    }
});

// Import komponen Vue dari folder 'components' secara otomatis
Object.entries(import.meta.glob('./components/*.vue', { eager: true })).forEach(([path, definition]) => {
    const componentName = path.split('/').pop().replace(/\.\w+$/, ''); // Ambil nama file sebagai nama komponen
    app.component(componentName, definition.default); // Daftarkan komponen secara otomatis
});

// Daftarkan komponen Header dan Footer agar bisa dipakai di dalam template
app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);

// Menggunakan router yang sudah diimpor sebelumnya
app.use(router);

// Memasang (mount) aplikasi Vue ke elemen dengan id 'app' di HTML
app.mount('#app');
