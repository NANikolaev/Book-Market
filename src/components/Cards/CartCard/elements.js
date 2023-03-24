import styled from "styled-components";

import { ArticleContainer,DivContainer,InnerHeading,SmallHeading,Paragraph,Button } from "../../common";

export const StyledArticle=styled(ArticleContainer)`
display: flex;
gap:20px;
width: 100%;
max-width: 500px;
padding: 10px;
border: 1px solid;
border-radius: 5px;
box-shadow: ${({theme})=>theme.shadows.prime};
div button span{
    color: ${({theme})=>theme.colors.redSec};
    font-weight: 700;
    font-size: 16px;
}
@media screen and (min-width:520px){
    p{
        font-size: 16px;
    }
}
`
export const StyledImg=styled.img`
width: 100px;
height: 150px;
`
export const StyledDiv=styled(DivContainer)`
width: 100%;
height:max-content;
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 10px;
`
export const StyledInnerHeading=styled(InnerHeading)`
 font-size: 1rem;
 width: 65%;
`
export const StyledParagraph=styled(Paragraph)`
width: 30%;
font-size: 14px;
`
export const StyledSmallHeading=styled(SmallHeading)`
 width: 65%;
`
export const StyledSpan=styled.span`
 color: ${({theme})=>theme.colors.tertiary};
`
export const StyledButton=styled(Button)`
background: transparent;
display: flex;
align-items: center;
gap: 5px;
line-height: 1;
width: 70px;
color: ${({theme})=>theme.colors.red};
`