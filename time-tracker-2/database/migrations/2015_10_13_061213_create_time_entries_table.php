<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimeEntriesTable extends Migration {
        
    // the up method creates the below fields in our time entries table
    public function up()
    {
        Schema::create('time_entries', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->string('comment')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('time_entries');
    }

}
