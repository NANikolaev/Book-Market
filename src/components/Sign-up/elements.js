import styled from "styled-components"; 
import { SectionContainer,Heading,Input,SubmitInput,Label,Form } from "../common";


export const StyledSection=styled(SectionContainer)`
 align-items: center;
`
export const StyledHeading=styled(Heading)``

export const StyledForm=styled(Form)`
flex-direction: column;
padding: 20px;
border: 1px solid ;
border-radius: 5px;
box-shadow: ${({theme})=>theme.shadows.prime};
max-width: 350px;
`
export const StyledLabel=styled(Label)``

export const StyledInput=styled(Input)`
 padding: 0 15px;
`

export const StyledSubmitInput=styled(SubmitInput)``