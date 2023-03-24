import styled from "styled-components";

import { ArticleContainer,InnerHeading,SmallHeading,Paragraph } from "../../common";

export const StyledArticle=styled(ArticleContainer)`
display: flex;
overflow: hidden;
flex-direction: column;
justify-content: space-between;
width: 125px;
border-radius: 5px;
box-shadow: ${({theme})=>theme.shadows.secondary};
transition: ease-in-out 300ms;
&:hover{
    transform: scale(1.05);
}

@media screen and (min-width:495px){
   width: 150px;
    img{
        height: 230px;
    }
    h3,p{
        font-size: 1rem;
    }
}
`
export const StyledImage=styled.img`
width: 100%;
height: 200px;
object-fit: cover;
`
export const StyledInnerHeading=styled(InnerHeading)`
 line-height: 1.5;
 max-height: 55px;
 overflow: hidden;
`
export const StyledSmallHeading=styled(SmallHeading)`
`
export const StyledParagraph=styled(Paragraph)`
color: ${({theme})=>theme.colors.tertiary};
font-size: 0.8rem;
`