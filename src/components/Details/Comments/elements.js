import styled from "styled-components";

import { DivContainer,Paragraph,TinyHeading,SubmitInput } from "../../common";

export const StyledDiv=styled(DivContainer)`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 10px;
 border-radius: 10px;
 border-top-left-radius: 0;
 border: 1px solid;
 max-height: 410px;
 overflow: auto;
 overflow-x: hidden;
 box-shadow: ${({ theme }) => theme.shadows.prime};
 
 ul>li:nth-child(even){
  background: ${({ theme }) => theme.colors.backgroundSec};
 }
 @media screen and (min-width:810px){
    p{font-size:16px}
 }
`
export const StyledList=styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
`
export const StyledItem=styled.li`
width: 100%;
font-size: 12px;
font-weight: 600;
padding: 5px;
color: ${({theme})=>theme.colors.tertiary};
border-bottom: 1px solid black;
border-radius: 5px;
`
export const StyledParagraph=styled(Paragraph)`
line-height: 1.3;
letter-spacing: 1px; 
font-size: 14px;
margin-top: 10px;
`
export const StyledTinyHeading=styled(TinyHeading)`
text-align: center;
font-size: 1.2rem;
letter-spacing: 1px;
margin: 20px 0;
text-shadow: ${({theme})=>theme.shadows.text};
`
export const StyledForm=styled.form`
display: flex;
flex-direction: column;
align-self: center;
margin-bottom: 20px;
gap: 20px;
width: 100%;
max-width: 300px;
`

export const StyledTextArea=styled.textarea`
 outline: none;
 border-radius: 5px;
 padding: 10px;
`
export const StyledSubmitInput=styled(SubmitInput)`
font-size: 14px;
`