import styled from "styled-components";

import { Button,DivContainer,SmallHeading } from "../../common";

export const StyledDiv=styled(DivContainer)`
position: relative;
 .success{
    background-color: #45759fcc;
 }
 .fail{
    background-color: #9f4545cc;
 }
`

export const StyledButton = styled(Button)`
 margin-top: 20px;
 width: 80px;
 gap: 5px;
 background-color: ${({theme})=>theme.colors.yellow};
 color: ${({theme})=>theme.colors.pink};
 font-weight: bolder;
 transition: ease-in-out 300ms;
 &:hover{
   background-color: ${({theme})=>theme.colors.orange};
 }
`
export const StyledIcon=styled.img`
 width: 18px;
`
export const StyledPopUp=styled(DivContainer)`
    display: block;
    position: absolute;
    padding: 5px;
    top: -50px;
    left: 20px;
    visibility:${props=>props.isOpen ? 'visible' : "hidden"};
    opacity:${props=>props.isOpen ? '1' : "0"};
    transition: opacity 0.7s,visibility 0.7s;
    text-align: center;
    border-radius: 8px;   
`
export const StyledSmallHeading=styled(SmallHeading)`
 line-height: 1.5;
`