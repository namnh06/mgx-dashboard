<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
//    return view('welcome');
    return Inertia::render('Welcome');
});

Route::get('/customers', [CustomerController::class, 'index'])->name('customers.index');
