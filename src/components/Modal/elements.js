import styled,{ keyframes } from "styled-components";
import { DivContainer } from "../common";

const animate=keyframes`
   0% {top:-200px;opacity:0;}
   100%{top:200px;opacity:1;}
`

export const StyledModal=styled(DivContainer)`
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    z-index: 3;
    background:#00000080;
`
export const StyledModalBody=styled(DivContainer)`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 position: absolute;
 width: 90%;
 max-width: 600px;
 left: 50%;
 top:200px;
 gap: 20px;
 margin: 0 auto;
 padding: 20px 0;
 border-radius: 5px;
 transform: translate(-50%);
 animation: ${animate} 0.7s;
 background: ${({theme})=>theme.colors.linear};
`