<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    protected function prepareForValidation()
    {
        $this->merge([
            'client_interest_id' => $this->route('client_interest'), 
        ]);
    }

    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            'user_id' => 'required|integer|unique:client_interest,user_id,NULL,id,interest_id,' . $this->interest_id,
            'interest_id' => 'required|integer|unique:client_interest,interest_id,NULL,id,user_id,' . $this->user_id,
        ];
    }
    

    public function messages()
    {
        return [
            'user_id.required' => 'Client ID is required!',
            'user_id.unique' => 'This client is already taken!',
            'interest.required' => 'Interest ID is required!',
            'interest.unique' => 'This interest is already taken!',
        ];
    }
}
