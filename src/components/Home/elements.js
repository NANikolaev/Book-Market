import styled from "styled-components";
import { ArticleContainer, SectionContainer, Heading } from "../common";

export const StyledSection = styled(SectionContainer)`
  & ul.pagination{
    display: none;
  }
  h2:nth-of-type(1){
   display:none ;
  }
  h2:nth-of-type(2){
   margin: 2% 0;
  }
 @media screen and (min-width:768px){
  h2:nth-of-type(1){
   display:block ;
  }
 }
`

export const StyledArticle = styled(ArticleContainer)`
  display: flex;
  margin: 0 auto;
  width:100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.prime};
`
export const StyledPoster = styled.img`
 width: 100%;
 height: 100%;
 max-height: 300px;
 object-fit: cover cover;
`
export const StyledHeading = styled(Heading)`
`