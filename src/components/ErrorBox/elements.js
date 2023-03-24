import styled from "styled-components";
import { Button,Paragraph } from "../common";

export const StyledButton=styled(Button)`
width: 100px;
color: ${({theme})=>theme.colors.redSec};
font-size: 16px;
font-weight: 600;
line-height: 2.0;
border-radius: 7px;
`
export const StyledParagraph=styled(Paragraph)`
width: 100%;
text-align: center;
color: ${({theme})=>theme.colors.red};
`