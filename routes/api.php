<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\InterestController;
use App\Http\Controllers\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::resource('employees',EmployeeController::class);
Route::resource('users',UserController::class);
Route::resource('roles',RoleController::class);
Route::resource('interests',InterestController::class);
Route::resource('clients',ClientController::class);
Route::get('get_users', [UserController::class,'get_users'])->name('users.get_users');
Route::get('get_roles', [UserController::class,'get_roles'])->name('users.get_roles');
Route::post('users/add', [UserController::class,'add'])->name('users.add');
Route::get('get_clients', [ClientController::class,'get_clients'])->name('clients.get_clients');
Route::get('get_interests', [ClientController::class,'get_interests'])->name('clients.get_interests');