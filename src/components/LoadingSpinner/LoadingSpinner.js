
import { StyledSpinner,StyledDiv } from "./elements";

const LoadingSpinner=({show})=>{
   return (
    <StyledDiv show={show}>
        <StyledSpinner/>
    </StyledDiv>
   )
};

export default LoadingSpinner