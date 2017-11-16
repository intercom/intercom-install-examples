<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
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
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_hash = hash_hmac(
          'sha256',
          Auth::user()->email,
          env('INTERCOM_SECRET_KEY')
        );
        return view('home')->with('user_hash', $user_hash);
    }
}
