import styled from "styled-components";

import { SectionContainer,Heading,InnerHeading } from "../common";

export const StyledSection=styled(SectionContainer)`
 max-width: 950px;
 margin: 0 auto;

 .redirect{
    color:${({theme})=>theme.colors.yellow};
    font-weight: 600;
    transition: ease-in-out 300ms;
    &:hover{
        color: ${({theme})=>theme.colors.orange};
    }

 }

 @media screen and (min-width:810px){
    h3{
        font-size: 1.5rem;
    }
 }
`
export const StyledHeading=styled(Heading)`
 text-align: start;
 text-shadow: ${({theme})=>theme.shadows.text};
`
export const StyledSpan=styled.span`
 color: ${({theme})=>theme.colors.secondary};
  margin:0 5px;
`
export const StyledInnerHeading=styled(InnerHeading)`
color: ${({theme})=>theme.colors.tertiary};
text-shadow: ${({theme})=>theme.shadows.text};
text-align: center;
font-size: 1.2rem;
`
export const StyledList=styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
gap: 50px;
`