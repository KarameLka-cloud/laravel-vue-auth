<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['namespace' => 'App\Http\Controllers', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/get', 'GetController');
});

//Route::get('/get', 'App\Http\Controllers\GetController');
