import { useState } from "react";
import { Link } from "react-router-dom";

import {useOuthRequest} from "../../../hooks";
import { del } from "../../../services";

import Modal from "../../Modal/Modal";

import {
     StyledListItem,
     StyledImage,
     StyledButton,
     StyledDiv,
     StyledInnerHeading,
     StyledSpan,
     StyledDeleteButton,
     StyledReturnButton
   } from "./elements";

const OfferCard = ({ book,setCatalog }) => {
    let [show, setShow] = useState(false);
    let outhRequest=useOuthRequest();

    function deleteBook(){
        del(book._id, outhRequest)
        .then(() => {
            setCatalog((catalog)=>{
                let newCatalog=catalog.filter(b=>b._id !== book._id);
                return newCatalog;
            })
        })
    }

    return (
            <StyledListItem>
                <StyledDiv className="offer">
                    <StyledImage src={book.image.url} alt='cover' />
                    <Link to={`/book/details/${book._id}`}>Details</Link>
                    <StyledButton onClick={() => setShow(!show)}>Delete</StyledButton>
                </StyledDiv>
                <Modal show={show}>
                    <StyledInnerHeading>"{book.title}" <StyledSpan>will be deleted!</StyledSpan></StyledInnerHeading>
                     <StyledDeleteButton onClick={deleteBook}>Yes</StyledDeleteButton>
                     <StyledReturnButton onClick={()=>setShow(!show)} >NO</StyledReturnButton>
                </Modal>
            </StyledListItem>      
    )
};

export default OfferCard