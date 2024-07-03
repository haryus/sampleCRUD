<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientInterest extends Model
{
    protected $table = 'client_interest';
    use HasFactory;
    protected $fillable = ["user_id", "interest_id"];

    protected $date = ["created_at","updated_at"];

    public function client(){
        return $this->belongsTo(User::class, 'user_id');
    }
    public function interest(){
        return $this->belongsTo(Interest::class, 'interest_id');
    }
}
