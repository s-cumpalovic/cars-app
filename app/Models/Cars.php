<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cars extends Model
{
    use HasFactory;

    public static function scopeSearchByBrand($query, $brand)
    {
        return $query->where('brand', 'LIKE', '%' . $brand . '%');
    }

    public static function scopeSearchByModel($query, $model)
    {
        return $query->where('model', 'LIKE', '%' . $model . '%');
    }
}
