<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TimeEntry extends Model
{
    protected $table = 'time_entries'; 

    protected $fillable = ['start_time', 'end_time', 'comment'];

    protected $hidden = ['user_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
  
}
