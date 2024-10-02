<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function() {
    return view('main');
});

// Route::any('/{slug}', function () {
//     return view('main');
// });

// Route::any('/{slug}/{subSlug}', function () {
//     return view('main');
// });

Route::get('/{any}', function() {
    return view('main');
})->where('any', '.*');
