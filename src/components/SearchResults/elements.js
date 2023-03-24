import styled from "styled-components";

import { SectionContainer,Heading } from "../common";

export const StyledSection=styled(SectionContainer)`
 h2:nth-of-type(2){
    text-align: center;
    color: ${({theme})=>theme.colors.tertiary};
    text-shadow: ${({theme})=>theme.shadows.text};
 }
 @media screen and (min-width:810px){
    h2{
        font-size: 1.5rem;
    }
 }
`
export const StyledHeading=styled(Heading)`
width: 100%;
max-width: 950px;
text-align: start;
font-size: 1.2rem;
margin: 0 auto;
`
export const StyledSpan=styled.span`
 color: ${({theme})=>theme.colors.secondary};
`