<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cars = Cars::all();
        return $cars;
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
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $cars = new Cars();
        $cars->brand = $request['brand'];
        $cars->model = $request['model'];
        $cars->year = $request['year'];
        $cars->max_speed = $request['max_speed'];
        $cars->is_automatic = $request['is_automatic'];
        $cars->engine = $request['engine'];
        $cars->number_of_doors = $request['number_of_doors'];
        $cars->save();
        return $cars;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cars = Cars::find($id);
        return $cars;
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
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $car = Cars::find($id);
        $car->brand = $request['brand'];
        $car->model = $request['model'];
        $car->year = $request['year'];
        $car->max_speed = $request['max_speed'];
        $car->is_automatic = $request['is_automatic'];
        $car->engine = $request['engine'];
        $car->number_of_doors = $request['number_of_doors'];
        $car->save();
        return $car;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $car = Cars::find($id)->delete();
        return $car;
    }
}
