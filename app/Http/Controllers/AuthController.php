<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use App\Models\User;

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
                "message" => "Unauthorized",
            ], 401);
        }
        return response()->json([
            "status" => "success",
            "user" => auth()->user(),
            "authorisation" => [
                "token" => $token,
            ],
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json([
            "status" => "success",
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $request->validated();

        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);

        $token = auth()->login($user);

        return response()->json([
            "status" => "success",
            "user" => $user,
            "authorisation" => [
                "token" => $token,
            ]
        ]);
    }
}
