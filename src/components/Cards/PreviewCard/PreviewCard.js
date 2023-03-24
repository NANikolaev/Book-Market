import { Link } from "react-router-dom";
import { StyledArticle, StyledImage, StyledInnerHeading, StyledSmallHeading, StyledParagraph } from "./elements";


const PreviewCard = ({ book }) => {
    return (
        <StyledArticle>            
            <Link to={`/book/details/${book._id}`}><StyledImage src={book.image.url} alt='cover' /></Link>
            <Link to={`/book/details/${book._id}`}><StyledInnerHeading>{book.title}</StyledInnerHeading></Link>
            <StyledSmallHeading>{book.author}</StyledSmallHeading>
            <StyledParagraph>$ {book.price}</StyledParagraph>
        </StyledArticle>
    )

};

export default PreviewCard