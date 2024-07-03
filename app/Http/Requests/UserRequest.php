<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => $this->route('user'), // Get the user ID from the route parameter
        ]);
    }

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'contact_no' => 'required|string',
            'password' => 'required|string',
            'email' => 'required|string|email|unique:users,email,' . $this->user_id, 
            'birthday' => 'required|date',
            'logged_id' => 'sometimes|required',
            'role_id' => 'integer|required',
        ];
    }

    public function messages()
    {
        return [
            'first_name.required' => 'First Name is required!',
            'last_name.required' => 'Last Name is required!',
            'contact_no.required' => 'Contact number is required!',
            'password.required' => 'Password is required!',
            'email.required' => 'Email is required!',
            'email.unique' => 'This email is already taken!',
            'role_id.required' => 'Role ID is required!',
            'birthday.required' => 'Birthday is required!',
            'logged_id.required' => 'Logged ID is required!',
        ];
    }
}
