<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Leaderboard;
use App\Models\Gamestate;
/**
 * @OA\Info(
 *     title="Laravel React Game Platform API",
 *     version="1.0.0",
 *     description="API documentation for the Laravel React Game Platform"
 * )
 */
class ApiController extends Controller
{
    public function getGamestate(Request $request, $game) {
        if (!Auth::check()) abort(401);
        return Gamestate::where('game', $game)
            ->where('username', Auth::user()->username)
            ->get()->toArray();
        /**
         * @OA\Get(
         *     path="/api/gamestate/{game}",
         *     tags={"API"},
         *     summary="Get game state",
         *     @OA\Parameter(
         *         name="game",
         *         in="path",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\Response(
         *         response=200,
         *         description="Game state returned"
         *     ),
         *     security={{"passport":{}}}
         * )
         */
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

        /**
         * @OA\Post(
         *     path="/api/gamestate/{game}",
         *     tags={"API"},
         *     summary="Save game state",
         *     @OA\Parameter(
         *         name="game",
         *         in="path",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\RequestBody(
         *         required=true,
         *         @OA\MediaType(
         *             mediaType="application/json",
         *             @OA\Schema(
         *                 @OA\Property(property="data", type="string")
         *             )
         *         )
         *     ),
         *     @OA\Response(
         *         response=200,
         *         description="Game state saved"
         *     ),
         *     security={{"passport":{}}}
         * )
         */
    public function getLeaderboard(Request $request, $game) {
        return Leaderboard::where('game', $game)->orderBy("metric", "desc")->take(10)->get()->toArray();
    }

        /**
         * @OA\Get(
         *     path="/api/leaderboard/{game}",
         *     tags={"API"},
         *     summary="Get leaderboard",
         *     @OA\Parameter(
         *         name="game",
         *         in="path",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\Response(
         *         response=200,
         *         description="Leaderboard returned"
         *     )
         * )
         */
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
        /**
         * @OA\Post(
         *     path="/api/leaderboard/{game}",
         *     tags={"API"},
         *     summary="Save leaderboard entry",
         *     @OA\Parameter(
         *         name="game",
         *         in="path",
         *         required=true,
         *         @OA\Schema(type="string")
         *     ),
         *     @OA\RequestBody(
         *         required=true,
         *         @OA\MediaType(
         *             mediaType="application/json",
         *             @OA\Schema(
         *                 @OA\Property(property="metric", type="number")
         *             )
         *         )
         *     ),
         *     @OA\Response(
         *         response=200,
         *         description="Leaderboard entry saved"
         *     ),
         *     security={{"passport":{}}}
         * )
         */
