<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gamestate extends Model
{
    protected $fillable = [
        'game',
        'username',
        'data'
    ];

    protected $table = "gamestates";
}
