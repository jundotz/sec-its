<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('main');
        // if (Auth::user()->hasRole('client')) {
        //     return view('dashboard.client');
        // } elseif(Auth::user()->hasRole('supervisor')){
        //     return view('dashboard.supervisor');
        // } elseif(Auth::user()->hasRole('admin')){
        //     return view('dashboard.admin');
        // }   
    }
}
