import { comment } from "../../../services";
import { useOuthRequest } from "../../../hooks";
import {
    StyledDiv,
    StyledList,
    StyledItem,
    StyledParagraph,
    StyledTinyHeading,
    StyledForm,
    StyledTextArea,
    StyledSubmitInput
} from "./elements";

const Comments = ({ book,setCatalog, user }) => {
    let outhRequest = useOuthRequest();
    let comments=book.comments;

    function addComment(e) {
        e.preventDefault()
        let text = e.target.comment.value.trim();
        if (text) {
            comment(book._id, text, outhRequest)
                .then(newComments => {
                    setCatalog(catalog=>{
                        let index=catalog.indexOf(book);
                        let newCatalog=catalog.slice();
                        newCatalog[index].comments=newComments;
                        return newCatalog;
                    });
                });
        };
        e.target.reset()
    };

    return (
        <StyledDiv>
            <StyledList>
                {comments.length > 0
                    ? comments.map((p, i) => <StyledItem key={i}>{p.username}:<StyledParagraph>{p.comment}</StyledParagraph></StyledItem>)
                    : ''
                }
            </StyledList>
            {user && comments.length < 1 && <StyledTinyHeading>Write first comment</StyledTinyHeading>}
            {!user && comments.length < 1 && <StyledTinyHeading>Still no comments</StyledTinyHeading>}
            {user
                ? <StyledForm onSubmit={addComment}>
                    <StyledTextArea name="comment" minLength={2} required></StyledTextArea>
                    <StyledSubmitInput type='submit' value='Comment' />
                </StyledForm>
                : ''
            }

        </StyledDiv>

    )
};

export default Comments