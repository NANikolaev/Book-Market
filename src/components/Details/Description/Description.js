import { StyledDiv,StyledParagraph } from "./elements";


const Description =({description})=>{
   
  return (
    <StyledDiv>
        <StyledParagraph>{description}</StyledParagraph>
    </StyledDiv>
  )

};

export default Description