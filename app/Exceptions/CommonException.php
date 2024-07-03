<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;

class CommonException extends Exception
{

    
    protected $e;
    protected $err_data;
    protected $status_code;

   public function __construct($e,$err_data,$status_code){

        $this->e=$e;
        $this->err_data=$err_data;
        $this->status_code=$status_code;

   }

   public function report(){
        Log::error(json_encode(
            array(
                'UserID'=>'33243',
                'UserName'=>'Ian The Great',
                'Called Method' => $this->err_data['Methods'],
                'Message' => mb_convert_encoding($this->e->getMessage(),'UTF-8'),
                'Passed Parameter' => $this->err_data['Parameters'],
                'FileName' => $this->e->getFile(),
                'Line Number' => $this->e->getLine(),
                'Trace' => $this->e->getTraceAsString()

            ),JSON_UNESCAPED_UNICODE

            ));

   }

   public function render(){
        return response()->json(
            [
                'message' => $this->e->getMessage(),
                'status_code'=> $this->status_code
            ],$this->status_code
        );
   }
}
