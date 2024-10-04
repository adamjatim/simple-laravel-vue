<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/', function() {
    return view('main');
});

// Route::any('/{slug}', function () {
//     return view('main');
// });

// Route::any('/{slug}/{subSlug}', function () {
//     return view('main');
// });

Route::get('/users', [AuthController::class, 'index' ]);

Route::get('/{any}', function() {
    return view('main');
})->where('any', '.*');
