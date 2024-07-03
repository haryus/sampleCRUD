<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InterestRequest extends FormRequest
{
    protected function prepareForValidation()
    {
        $this->merge([
            'interest_id' => $this->route('interest'), 
        ]);
    }

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|unique:interests,name,' . $this->interest_id, 
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
