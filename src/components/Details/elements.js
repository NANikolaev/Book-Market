import styled from "styled-components";
import { SectionContainer, DivContainer, ArticleContainer, Heading, SmallHeading, TinyHeading, Paragraph } from "../common";

export const StyledSection = styled(SectionContainer)`
 background: ${({ theme }) => theme.colors.linear};
 box-shadow: ${({ theme }) => theme.shadows.prime};
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-between;
 max-width: 1200px;
 padding: 20px;
 margin-left:10px;
 border-radius: 5px;
 span{color:${({ theme }) => theme.colors.tertiary}}
 article>div{
   width: unset;
    max-width: 210px;
 }
 @media screen and (min-width:1200px){
    margin: 0 auto;
 }
`

export const StyledArticle = styled(ArticleContainer)`
display: flex;
flex-wrap: wrap;
gap: 20px;
`
export const StyledImage = styled.img`
width: 200px;
height: 300px;
border-radius: 5px;
`
export const StyledDiv = styled(DivContainer)`
width: 100%;
max-width: 540px;
`
export const StyledHeading = styled(Heading)`
text-align: start;
`

export const StyledSmallHeading = styled(SmallHeading)`
display: flex;
align-items: center;
gap: 5px;
`
export const StyledIcon = styled.img`
width: 20px;
`
export const StyledDescriptionList = styled.ul`
display: flex;
flex-direction: column;
margin-top: 40px;
gap: 15px;
`
export const StyledDescriptionItem = styled.li`
color: ${({ theme }) => theme.colors.prime};
border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
padding-bottom: 10px;
max-width: 160px;
`
export const StyledNavList = styled.ul`
display: flex;
padding-left: 1px;
`
export const StyledNavItem = styled.li`
color: ${({ theme }) => theme.colors.prime};
padding: 5px;
border-radius: 2px;
background-color: ${props => props.active ? props.theme.colors.backgroundSec : ''};
`
export const StyledTinyHeading = styled(TinyHeading)`
 text-shadow: none;
 font-size: 14px;
 color: ${({ theme }) => theme.colors.red};
 text-align: center;
 width: 130px;
 margin-top: 10px;
 line-height:1.5rem;
`
export const StyledParagraph = styled(Paragraph)`
font-size: 14px;
`