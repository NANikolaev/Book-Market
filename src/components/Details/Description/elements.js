import styled from "styled-components";
import { DivContainer, Paragraph } from "../../common";

export const StyledDiv = styled(DivContainer)`
 padding: 10px;
 border-radius: 10px;
 border-top-left-radius: 0;
 border: 1px solid;
 box-shadow: ${({ theme }) => theme.shadows.prime};
 max-width: 540px;

 @media screen and (min-width:810px){
    p{font-size:16px}
 }
`
export const StyledParagraph = styled(Paragraph)`
line-height: 1.3;
letter-spacing: 1px; 
font-size: 14px;
`
