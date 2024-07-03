<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(UserRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::create([
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'first_name' => $validatedData['first_name'],
            'last_name' => $validatedData['last_name'],
            'contact_no' => $validatedData['contact_no'],
            'birthday' => $validatedData['birthday'],
            'role_id' => $validatedData['role_id'],
            'created_by' => $validatedData['logged_id'],
            'updated_by' => $validatedData['logged_id'],
        ]);

        return response()->json($user, 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $req)
    {
        try {
            $user = User::where('email', $req->name)
                        ->orWhere('first_name', $req->name)
                        ->with('role') 
                        ->first();
    
            if ($user && Hash::check($req->password, $user->password)) {
                if ($user->role->name === 'Admin') { 
                    return response()->json($user);
                } else {
                    return response()->json(['error' => 'Unauthorized access'], 403);
                }
            } else {
                return response()->json(['error' => 'Invalid credentials'], 401);
            }
        } catch (\Exception $e) {
            $err_data = ['Parameters' => null, 'Methods' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
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
    public function update(UserRequest $request, $id)
    {
        $validatedData = $request->validated();

        try {
            $user = User::findOrFail($id);

            $user->update([
                'email' => $validatedData['email'],
                'password' => bcrypt($validatedData['password']),
                'first_name' => $validatedData['first_name'],
                'last_name' => $validatedData['last_name'],
                'contact_no' => $validatedData['contact_no'],
                'birthday' => $validatedData['birthday'],
                'role_id' => $validatedData['role_id'],
                'updated_by' => $validatedData['logged_id'],
            ]);

            return response()->json($user, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating user.', 'error' => $e->getMessage()], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::where('id',$id)
                ->delete();
        return 1;

    }

    public function get_users(Request $req)
    {
        $users = User::where('created_by', $req->role_id)->with('role:id,name')->get();
        return $users;
    }
    public function get_roles(Request $req)
    {
        $roles = Role::select('id', 'name')->get();
        return ($roles);
    }
    public function add(UserRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::create([
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'first_name' => $validatedData['first_name'],
            'last_name' => $validatedData['last_name'],
            'contact_no' => $validatedData['contact_no'],
            'birthday' => $validatedData['birthday'],
            'role_id' => $validatedData['role_id'],
            'created_by' => 1,
            'updated_by' => 1,
        ]);

        return response()->json($user, 201);

    }
}
