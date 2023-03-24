import styled from "styled-components";
import { DivContainer } from "../common";

export const StyledEllipse = styled(DivContainer)`
width: 350px;
height: 350px;
position: absolute;
border-radius: 100%;
border:none;
background: ${({ theme }) => theme.colors.linear};
top: -95px;
left: -8%;
@media screen and (min-width:1200px){
 left: -4%;
}
@media screen and (min-width:1400px){
 left: 0%;
}
`