<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\UserController;
use App\Models\Leaderboard;

Route::get("/gamestart/{any}", function(){return view('index');});
Route::get("/account", function(){return view('index');});
Route::get("/register", function(){return view('index');});
Route::get("/login", function(){return view('index');});
Route::get("/", function(){return view('index');});

Route::get("/isloggedin", function(){
    $a = Auth::check();
    return $a == true ? "true" : "false";
});

Route::get("/logout", function(Request $request) {
    Auth::logout();
    return redirect('/login');
});

Route::get("/api/user", function(Request $request){
    return [
        "username" => Auth::user()->username,
        "email" => Auth::user()->email,
    ];
});

Route::get("/api/gamestate/{game}", [ApiController::class, 'getGamestate']);
Route::post("/api/gamestate/{game}", [ApiController::class, 'postGamestate']);
Route::get("/api/leaderboard/{game}", [ApiController::class, 'getLeaderboard']);
Route::post("/api/leaderboard/{game}", [ApiController::class, 'postLeaderboard']);
Route::post('/api/register', [RegisterController::class, 'register']);
Route::post('/api/login', [LoginController::class, 'login']);
Route::post('/api/account', [UserController::class, 'accountsettings']);
