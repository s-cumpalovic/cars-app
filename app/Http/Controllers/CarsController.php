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
    public function index(Request $request)
    {
        $perPage = $request->per_page ?? 10;
        $query = Cars::query();

        if ($request->brand) {
            $brand = $request->brand;
            Cars::scopeSearchByBrand($query, $brand);
        }
        if ($request->model) {
            $model = $request->model;
            Cars::scopeSearchByModel($query, $model);
        }

        return $query->paginate($perPage);
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
        $validated = $request->validate([
            'brand' => 'required|min:2',
            'model' => 'required|min:2',
            'year' => 'required',
            'max_speed' => 'min:20|max:300',
            'is_automatic' => 'required',
            'engine' => 'required',
            'number_of_doors' =>  'required|min:2|max:5'
        ]);

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
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'brand' => 'required|min:2',
            'model' => 'required|min:2',
            'year' => 'required',
            'max_speed' => 'min:20|max:300',
            'is_automatic' => 'required',
            'engine' => 'required',
            'number_of_doors' =>  'required|min:2|max:5'
        ]);

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
