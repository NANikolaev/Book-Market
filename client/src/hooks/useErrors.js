import { useState } from "react";


function useErrors(){
    const [errors,setErrors]=useState([])

    function showErrors(error){
        let errors=error.message.split(",")
        setErrors(errors)
    }
   return [errors,showErrors]
}

export default useErrors