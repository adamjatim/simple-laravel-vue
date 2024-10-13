// Import fungsi createRouter dan createWebHistory dari Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import komponen yang akan digunakan untuk rute (halaman yang berbeda)
import HomeComponent from '../pages/HomeComponent.vue';
import AboutComponent from '../pages/AboutComponent.vue';
import UserComponent from '../pages/UserComponent.vue';
import RegisterUserComponent from '../pages/RegisterUserComponent.vue';
import ProfileComponent from '../pages/ProfileComponent.vue';
import NotFoundComponent from '../pages/NotFoundComponent.vue';
import { toast } from 'vue3-toastify';

// Definisikan daftar rute
const routes = [
	// Route untuk halaman Home ('/')
	{ name: 'Home', path: '/', component: HomeComponent },

	// Route untuk halaman About ('/about')
	{ name: 'About', path: '/about', component: AboutComponent },

	// Route untuk halaman user ('/user')
	{ name: 'User', path: '/user', component: UserComponent },

	// Route untuk halaman user ('/user')
	{ name: 'RegisterUser', path: '/user/create', component: RegisterUserComponent },

	// Route untuk halaman profile user ('/user/:id')
	{ name: 'Profile', path: '/user/:id', component: ProfileComponent, props: true },

	// Route untuk menangani semua path yang tidak sesuai (404 Not Found)
	{ path: '/:pathMatch(.*)*', component: NotFoundComponent },
];

// Membuat instance router dengan mode 'history' (URL bersih tanpa hash '#' di URL)
const router = createRouter({
	linkActiveClass: 'active',
	history: createWebHistory(), // Menggunakan mode HTML5 history
	routes, // Menghubungkan router ke daftar rute yang telah dibuat
});

// Panggil router.afterEach setelah instance router dibuat
// Remove the toast logic in index.js:
router.afterEach((to, from) => {
	if (to.name === 'User') {
		const toastMessage = localStorage.getItem('toastMessage');
		if (toastMessage) {
			toast.success(toastMessage, {
				autoClose: 5000,
				position: toast.POSITION.TOP_RIGHT,
			});
			// Clear the message from localStorage after showing it
			localStorage.removeItem('toastMessage');
		}
	}
});



// Mengekspor router agar bisa digunakan di file lain, seperti app.js
export default router;
