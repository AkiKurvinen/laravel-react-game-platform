<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Leaderboard;
use App\Models\Gamestate;

class UserController extends Controller
{
    public function accountsettings(Request $request) {
        if (!Auth::check()) abort(401);
        $validatedData = $request->validate([
            'username' => 'required',
            'email' => 'required|email',
            'password' => '',
        ]);
        
        $user = Auth::user();
        Leaderboard::where('username', $user->username)->update(['username' => $validatedData['username']]);
        Gamestate::where('username', $user->username)->update(['username' => $validatedData['username']]);
        $user->username = $validatedData['username'];
        $user->email = $validatedData['email'];
        if ($request->filled("password")) {
            $user->password = Hash::make($validatedData["password"]);
        }
        $user->save();


        return response()->json(["message" => "account settings saved", 200]);
    }
}
