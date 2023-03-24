import { Link } from "react-router-dom";
import { StyledList, StyledItem, StyledImage, StyledArticle } from "./elements";

const Carausel = ({newest}) => {

    return (

        <StyledArticle>
            <StyledList>
                {newest.map((b,i)=><StyledItem key={i}><Link to={`/book/details/${b._id}`}><StyledImage src={b.image.url} alt='cover'/></Link></StyledItem>)}
                {newest.map((b,i)=><StyledItem key={10+i}><Link to={`/book/details/${b._id}`}><StyledImage src={b.image.url} alt='cover'/></Link></StyledItem>)}
            </StyledList>
        </StyledArticle>
    )

};

export default Carausel