<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(LoginRequest $request)
    {
        $request->validated();

        $credentials = [
            'email' => $request['email'],
            'password' => $request['password'],
        ];

        $token = auth()->attempt($credentials);

        if (!$token) {
            return response()->json([
                "status" => "error",
                "message" => "Unathorized",
            ]);
        }

        return response()->json([
            "status" => "success",
            "user" => auth()->user(),
            "authorisation" => [
                "token" => $token,
            ],
        ]);
    }
}
