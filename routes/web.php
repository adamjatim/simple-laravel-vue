<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function() {
    return view('main');
});

Route::any('/{slug}', function () {
    return view('main');
});
