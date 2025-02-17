<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ContactRequestController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/calendar', function () {
    return Inertia::render('Calendar');
})->name('calendar');

Route::post('/calendly-appointments', [AppointmentController::class, 'store'])->name('calendly.appointments.store');
Route::get('/appointments/check-availability', [AppointmentController::class, 'checkAvailability'])->name('appointments.check-availability');

Route::get('/solutions', function () {
    return Inertia::render('Solutions');
})->name('solutions');

Route::get('/collab', function () {
    return Inertia::render('Collab');
})->name('collab');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/contact-requests', [ContactRequestController::class, 'store'])->name('contact-requests.store');

require __DIR__.'/auth.php';
