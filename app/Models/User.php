<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'password',
        'first_name',
        'last_name',
        'contact_no',
        'birthday',
        'role_id',
        'created_by',
        'updated_by',
    ];

    protected $date = ['created_at', 'updated_at'];
    protected $hidden = [
        'password',
    ];

    public function role(){
        return $this->belongsTo(Role::class, 'role_id');
    }

}
