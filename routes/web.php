<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Routes
Route::get('/', [HomeController::class, 'index'])->name('home');

// Auth Routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::inertia('/dashboard', 'Dashboard')
        ->name('dashboard');
});
