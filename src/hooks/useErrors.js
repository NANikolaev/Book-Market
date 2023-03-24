import { useState } from "react";


export const useErrors=()=>{
    const [errors,setErrors]=useState([])

    function showErrors(error){
        let errors=error.message.split(",")
        setErrors(errors)
    }
   return [errors,showErrors]
}