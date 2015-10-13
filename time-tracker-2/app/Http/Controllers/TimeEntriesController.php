<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\TimeEntry;

use Illuminate\Support\Facades\Request;

class TimeEntriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $time = TimeEntry::with('user')->get();

        return $time; 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * @return \Illuminate\Http\Response
     * @internal param \Illuminate\Http\Request $request
     */
    public function store()
    {
        $data = Request::all();

        $timeentry = new TimeEntry();

        $timeentry->fill($data);

        $timeentry->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     * @internal param \Illuminate\Http\Request $request
     */
    // Grab all the data passed into the request and fill the database record with the new data
    public function update($id)
    {
        $timeentry = TimeEntry::find($id);

        $data = Request::all();

        $timeentry->fill($data);

        $timeentry->save();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $timeentry = TimeEntry::find($id);

        $timeentry->delete();
    }
}
