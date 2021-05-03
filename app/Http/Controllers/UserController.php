<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function role()
    {
        return Auth::user()->roles;
    }
    
    public function info()
    {
        return Auth::user();
    }
    
    public function createToken()
    {
        $token = Auth::user()->createToken('user_token');
        return ['token' => $token->plainTextToken];
    }

    public function revokeToken(Request $request)
    {
        if ($request->bearerToken()) {
            // Revoke the token that was used to authenticate the current request...
            return Auth::user()->currentAccessToken()->delete();
        }else{
            return response('Action not allowed');
        }

    }

    public function getTokens()
    {
        return Auth::user()->tokens;
    }
}
