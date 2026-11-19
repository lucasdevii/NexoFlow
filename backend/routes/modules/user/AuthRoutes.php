<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\AuthController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/cadaster', [AuthController::class, 'cadaster']);