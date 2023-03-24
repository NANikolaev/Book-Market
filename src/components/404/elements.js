import styled from "styled-components";

import { DivContainer } from "../common";

export const StyledDiv=styled(DivContainer)`
position: relative;
width: 100%;
max-width: 570px;
margin: 0 auto;
box-shadow: ${({theme})=>theme.shadows.prime};
`
export const StyledImage=styled.img`
width: 100%;
border-radius: 5px;
`