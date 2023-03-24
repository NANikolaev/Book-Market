import styled from "styled-components";
import { SectionContainer,Heading } from "../common";

export const StyledSection=styled(SectionContainer)`
   @media screen and (min-width:780px){
    li{
        font-size: 1rem;
    }
    h2{
        font-size: 1.5rem;
    }
   }
`
export const StyledList=styled.ul`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 max-width: 670px;
 gap: 20px;
 margin: 0 auto;
`
export const StyledItem=styled.li`
 text-shadow: ${({theme})=>theme.shadows.text};
 color: ${({theme})=>theme.colors.secondary};
 font-size: 0.8rem;
`
export const StyledHeding=styled(Heading)`
 font-size: 1.2rem;
 margin-bottom: 20px;
`