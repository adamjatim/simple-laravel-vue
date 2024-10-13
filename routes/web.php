<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
	return view('main');
});

Route::get('/{any}', function () {
	return view('main');  // Return your Vue SPA entry point
})->where('any', '.*');   // This handles all routes and serves the main view
