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
 *
 * @OA\SecurityScheme(
 *     securityScheme="apiAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT"
 * )
 */
class ApiController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/gamestate/{game}",
     *     tags={"API"},
     *     summary="Get game state for authenticated user",
     *     description="Requires authentication.",
     *     security={{"apiAuth":{}}},
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
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     )
     * )
     */
    public function getGamestate(Request $request, $game) {
        if (!Auth::check()) abort(401);
        return Gamestate::where('game', $game)
            ->where('username', Auth::user()->username)
            ->get()->toArray();
    }

    /**
     * @OA\Post(
     *     path="/api/gamestate/{game}",
     *     tags={"API"},
     *     summary="Save game state for authenticated user",
     *     description="Requires authentication.",
     *     security={{"apiAuth":{}}},
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
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     )
     * )
     */
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
     * @OA\Get(
     *     path="/api/leaderboard/{game}",
     *     tags={"API"},
     *     summary="Get leaderboard for a game",
     *     description="Public endpoint.",
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
    public function getLeaderboard(Request $request, $game) {
        return Leaderboard::where('game', $game)->orderBy("metric", "desc")->take(10)->get()->toArray();
    }

    /**
     * @OA\Post(
     *     path="/api/leaderboard/{game}",
     *     tags={"API"},
     *     summary="Save leaderboard entry for authenticated user",
     *     description="Requires authentication.",
     *     security={{"apiAuth":{}}},
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
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
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