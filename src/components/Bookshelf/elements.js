import styled from "styled-components";
import { DivContainer,TinyHeading } from "../common";

export const StyledDiv=styled(DivContainer)`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
max-width: 950px;
gap: 50px;
margin: 0 auto;
@media screen and (min-width:780px){
    h5{
        font-size: 2rem;
    }
}

`
export const StyledTinyHeading=styled(TinyHeading)`
 color: ${({theme})=>theme.colors.tertiary};
 text-align: center;
 font-size: 1.2rem;
`