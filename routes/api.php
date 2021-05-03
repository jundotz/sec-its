<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function(){

    Route::get('/user/create-token', [UserController::class, 'createToken']);
    Route::get('/user/revoke-token', [UserController::class, 'revokeToken']);
    Route::get('/user/get-tokens', [UserController::class, 'getTokens']);

    Route::get('/user/role', [UserController::class, 'role']);
    Route::get('/user/info', [UserController::class, 'info']);

});