<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
{
    protected function prepareForValidation()
    {
        $this->merge([
            'role_id' => $this->route('role'), 
        ]);
    }

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|unique:roles,name,' . $this->role_id, 
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Name is required!',
            'name.unique' => 'This name is already taken!',
        ];
    }
}