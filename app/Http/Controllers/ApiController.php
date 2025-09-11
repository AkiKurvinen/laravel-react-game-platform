<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Leaderboard;
use App\Models\Gamestate;

class ApiController extends Controller
{
    public function getGamestate(Request $request, $game) {
        if (!Auth::check()) abort(401);
        return Gamestate::where('game', $game)
            ->where('username', Auth::user()->username)
            ->get()->toArray();
    }

    public function postGamestate(Request $request, $game) {
        if (!Auth::check()) abort(401);
        $validatedData = $request->validate([
            'data' => 'required',
        ]);

        Gamestate::where('username', Auth::user()->username)
            ->where('game', $game)
            ->delete();
    
        $game = Gamestate::Create(
            ['username' => Auth::user()->username, 'data' => $validatedData['data'], 'game' => $game] 
        );
    
        return response()->json($game, 200);
    }

    public function getLeaderboard(Request $request, $game) {
        return Leaderboard::where('game', $game)->orderBy("metric", "desc")->take(10)->get()->toArray();
    }

    public function postLeaderboard(Request $request, $game) {
        if (!Auth::check()) abort(401);
        $validatedData = $request->validate([
            'metric' => 'required|numeric',
        ]);

        Leaderboard::where('username', Auth::user()->username)
            ->where('game', $game)
            ->delete();
    
        $game = Leaderboard::Create(
            ['username' => Auth::user()->username, 'metric' => $validatedData['metric'], 'game' => $game] 
        );
    
        return response()->json($game, 200);
    }
}
