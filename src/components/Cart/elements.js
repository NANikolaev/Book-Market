import styled from "styled-components";

import { SectionContainer,Heading,InnerHeading,Paragraph,Button } from "../common";

export const StyledSection=styled(SectionContainer)`
width: 100%;
max-width: 1100px;
justify-content:space-evenly;
flex-direction: row;
flex-wrap: wrap;
margin: 0 auto;
 a{
    color:${({theme})=>theme.colors.yellow};
    font-weight: 700;
    transition: ease-in-out 300ms;
    &:hover{
        color:${({theme})=>theme.colors.orange}
    }
 }
 @media screen and (min-width:516px){
    h3{
        font-size: 18px;
    }
 }
 @media screen and (min-width:1064px){
    justify-content:space-between;
    p{
        text-align: start;
    }
 }
`
export const StyledHeading=styled(Heading)`
text-align: start;
width: 100%;
`
export const StyledInnerHeading=styled(InnerHeading)`
display: ${({show})=>show ? 'block' : "none"};
text-align: center;
width: 100%;
`
export const StyledParagraph=styled(Paragraph)`
width: 100%;
text-align: center;
`
export const StyledButton=styled(Button)`
width: 100%;
max-width: 150px;
font-weight: 600;
color: ${({theme})=>theme.colors.pink};
background: ${({theme})=>theme.colors.orange};
box-shadow: ${({theme})=>theme.shadows.prime};
transition: ease-in-out 300ms;
&:hover{
    background: ${({theme})=>theme.colors.yellow};
}
`