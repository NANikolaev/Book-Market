import styled from "styled-components";
import { Button,DivContainer,InnerHeading } from "../../common";


export const StyledListItem=styled.li`
 a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    height: 25px;
    letter-spacing: 1px;
    border-radius: 3px;
    background: ${({theme})=>theme.colors.backgroundSec};
    color: ${({theme})=>theme.colors.yellow};
    transition: ease-in-out 300ms;
    &:hover{
        color: ${({theme})=>theme.colors.orange}; 
    }
 }

   @media screen and (min-width:495px){
   .offer{
    width: 150px;
   }
    h3{
    font-size: 1.2rem;
   }
    img{
        height: 230px;
    }
   }
   @media screen and (min-width:810px){
    h3{
    font-size: 1.5rem;
   }
   }
   
`
export const StyledDiv=styled(DivContainer)`
 display: flex;
 flex-direction: column;
 overflow: hidden;
 width: 125px;
 padding-bottom: 7px;
 gap: 7px;
 border-radius: 5px;
 box-shadow: ${({theme})=>theme.shadows.secondary};
 transition: ease-in-out 300ms;
 &:hover{
    transform: scale(1.05);
   }
`
export const StyledImage=styled.img`
 width: 100%;
 height: 200px;
 object-fit: cover;
`
export const StyledButton=styled(Button)`
 height: 25px;
 letter-spacing: 1px;
 border-radius: 3px;
 font-weight: 600;
 font-size: 16px;
 line-height: 1.2;
 background: ${({theme})=>theme.colors.backgroundSec};
 color: ${({theme})=>theme.colors.red};
 transition: ease-in-out 300ms;
 &:hover{
        color: ${({theme})=>theme.colors.redSec}; 
    }
`

export const StyledInnerHeading=styled(InnerHeading)`
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  width: 100%;
`
export const StyledSpan=styled.span`
color: ${({theme})=>theme.colors.redSec};
margin-left: 10px;
font-weight: 600;
`
export const StyledDeleteButton=styled(StyledButton)`
height: 30px;
width: 80px;
line-height: 1;
color:${({theme})=>theme.colors.tertiary};
background: ${({theme})=>theme.colors.red};
&:hover{
    transform: scale(1.05);
    background: ${({theme})=>theme.colors.tertiary};
}
`
export const StyledReturnButton=styled(StyledDeleteButton)`
background:${({theme})=>theme.colors.green};
&:hover{
    color:${({theme})=>theme.colors.green};
}
`