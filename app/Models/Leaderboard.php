<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Leaderboard extends Model
{
    protected $fillable = [
        'game',
        'username',
        'metric'
    ];

    protected $table = "leaderboards";
}
