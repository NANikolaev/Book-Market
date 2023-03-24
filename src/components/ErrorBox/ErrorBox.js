import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

import { StyledButton,StyledParagraph } from "./elements";

const ErrorBox=({errors})=>{
   let[show,setShow]=useState(false);

   useEffect(() => {
    if (errors.length > 0) {
        setShow(!show)
    }
   }, [errors])

  return (
    <Modal show={show}>
        {errors.map((x,i)=><StyledParagraph key={i}>{x}</StyledParagraph>)}
        <StyledButton onClick={()=>setShow(!show)}>Close</StyledButton>
    </Modal>
  )
};

export default ErrorBox