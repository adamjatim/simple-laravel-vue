# Vue Laravel SPA

## Build Setup
For the Vue Js frontend:
```bash
# install dependencies
$ npm install

# compile assets with hot-reloading (for development)
$ npm run dev

# build assets for production
$ npm run build
```

For the Laravel backend:
```bash
# install Laravel dependencies
$ composer install

# migrate database & add sample data user
$ php artisan migrate
$ php artisan db:seed --class=UserSeeder

# set up environment variables
$ cp .env.example .env
$ php artisan key:generate

# serve the Laravel backend at localhost:8000
$ php artisan serve
```

For detailed explanation on how Laravel and Vue.js work together, check out the [Vue documentation](https://vuejs.org/) and the [Laravel documentation](https://laravel.com/docs).

## Special Directories and Structure
This project integrates Vue.js as the frontend and Laravel as the backend, so the structure follows both technologies.

### resources/js
This directory contains your Vue.js files such as components, pages, and the main entry point for Vue. All your Vue logic will reside here.

- `components/`: This contains your reusable Vue components.
- `pages/`: This contains the different pages used in the routing system.
- `router/`: Contains the Vue Router setup for handling frontend routes.
- `app.js`: The main entry point for Vue in your Laravel project. This is where you initialize Vue, register components, and set up the router.

### resources/views
This directory contains your Laravel Blade templates. These templates are used to serve the main HTML structure and integrate the Vue components. For example, `main.blade.php` will serve as the primary view where Vue components are injected.

### routes/web.php
This is where you define your Laravel routes. This project uses Laravel to handle the backend routing, while Vue Router handles the frontend routes for Single Page Application (SPA) navigation.

### public/
This is the public directory for your Laravel project, and it contains your compiled assets such as JavaScript, CSS, and images after running `npm run build`.

### webpack.mix.js or vite.config.js
This is where you configure Laravel Mix or Vite (depending on your project setup) for compiling frontend assets such as Vue components and JavaScript files.

## Usage Notes
- To access Vue.js routes (like `/about` or `/user/:name`), ensure that your Laravel routes are properly configured to handle all undefined routes and redirect them to the main view (typically `main.blade.php`).
- If you encounter any 404 errors when navigating Vue routes, make sure your `routes/web.php` contains a catch-all route for SPA routing.

### Vue Router
Vue Router is used for handling frontend routing. Pages like `/home`, `/about`, and dynamic routes like `/user/:name` are managed by Vue Router in the frontend.

### Laravel Backend
The Laravel framework handles all backend logic and API requests. You can define your APIs in `routes/api.php` and utilize Laravel's rich ecosystem for backend services.

---

For more detailed information, please refer to the official documentation for each framework:

- [Vue documentation](https://vuejs.org/)
- [Laravel documentation](https://laravel.com/docs)
