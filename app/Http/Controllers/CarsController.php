<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCarRequest;
use App\Models\Cars;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        /* 2. JAKO KUL Nacin */

        $perPage = $request->query('per_page', 5);

        $brand = $request->query('brand', '');
        $model = $request->query('model', '');

        return Cars::query()->SearchByBrand($brand)->SearchByModel($model)->get();
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
    public function store(CreateCarRequest $request)
    {
        $validated = $request->validated();

        $cars = new Cars();
        $cars->brand = $validated['brand'];
        $cars->model = $validated['model'];
        $cars->year = $validated['year'];
        $cars->max_speed = $validated['max_speed'];
        $cars->is_automatic = $validated['is_automatic'];
        $cars->engine = $validated['engine'];
        $cars->number_of_doors = $validated['number_of_doors'];
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
    public function update(CreateCarRequest $request, $id)
    {
        $validated = $request->validated();

        $car = Cars::find($id);
        $car->brand = $validated['brand'];
        $car->model = $validated['model'];
        $car->year = $validated['year'];
        $car->max_speed = $validated['max_speed'];
        $car->is_automatic = $validated['is_automatic'];
        $car->engine = $validated['engine'];
        $car->number_of_doors = $validated['number_of_doors'];
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
