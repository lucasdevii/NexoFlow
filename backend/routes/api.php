<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/modules/user/AuthRoutes.php';

Route::get('/hello', function (Request $request) {
    return "Hello!";
});
