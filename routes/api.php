<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
	return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', [AuthController::class, 'index']);
Route::post('/users', [AuthController::class, 'store']);

Route::get('/users/{id}', [AuthController::class, 'show']);
