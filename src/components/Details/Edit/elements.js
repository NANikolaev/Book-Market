import styled from "styled-components";

import { DivContainer, Heading, Form, Label, Input, SubmitInput, Button, Paragraph } from "../../common";

export const StyledDiv = styled(DivContainer)`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 10px;
 border-radius: 10px;
 border-top-left-radius: 0;
 border: 1px solid;
 box-shadow: ${({ theme }) => theme.shadows.prime};
 input[type="file"] {
    display: none;
 }
 div:nth-of-type(6){
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: end;
  padding-bottom: 5px;
 }
 div:nth-of-type(7){
    overflow: hidden;
    gap: 10px;
 }
 div:nth-of-type(8){
    width: 87%;
    gap: 20px;
    align-items: center;
 }
 @media screen and (min-width:534px){
    div:nth-of-type(7){
    width: 100%;
    margin: 0 38px
   }
 }
 
`
export const StyledHeading = styled(Heading)`
width: 100%;
`
export const StyledForm = styled(Form)`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 width: 100%;
 padding-bottom: 20px;
 gap: 20px;
`
export const StyledFormGroup = styled(DivContainer)`
 display: flex;
 flex-direction: column;
 width: 210px;
 gap: 5px;
`
export const StyledLabel = styled(Label)`

`
export const StyledInput = styled(Input)`
 padding-left: 15px;
`
export const StyledButton = styled(Button)`
line-height: 2;
width: 100px;
padding: 2px;
font-size: 12px;
color: ${({ theme }) => theme.colors.prime};
background: ${({ theme }) => theme.colors.backgroundSec};
`
export const StyledSelect = styled.select`
 width: 110px;
 outline: none;
 border-radius: 10px;
 padding-left: 8px;
 font-weight: 600;
`
export const StyledParagraph = styled(Paragraph)`
font-size: 14px;
`
export const StyledTextArea = styled.textarea`
 padding: 5px;
 width: 100%;
 height: 200px;
 border-radius: 5px;
 color: ${({theme})=>theme.colors.secondary};
 background: transparent;
 border: 1px solid black;
 box-shadow: ${({ theme }) => theme.shadows.prime};
 resize: none;
 outline: none;
`
export const StyledSubmitInput=styled(SubmitInput)`
width: 90px;
margin-top: 0;
line-height: 2.2;
`