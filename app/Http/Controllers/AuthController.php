<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
	public function index()
	{
		// $users = DB::table('users')->select('id','name')->get();
		$users = User::all();
		// dd($users);
		return response()->json($users);
	}

	public function show($id)
	{
		// $users = DB::table('users')->where('id', $id)->first();
		$user = User::find($id);
		// dd($users);
		return response()->json($user);
	}

	public function store(Request $request)
	{
		$user = new User;
		$user->name = $request->name;
		$user->email = $request->email;
		$user->password = Hash::make($request->password);

		$user->save();
		return response()->json([
			"status" => true,
			"message" => 'User data successfully saved',
			"data" => $user
		]);
	}
}
