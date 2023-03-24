import { useState } from "react";
import { useParams } from "react-router-dom";

import { useOuthRequest } from "../../../hooks";
import { add } from '../../../services';

import { StyledDiv, StyledButton, StyledIcon, StyledPopUp, StyledSmallHeading } from "./elements";

import cartIcon from "../../../assets/icons/icons8-shopping-cart-26.png";

const AddButton = ({ title }) => {

    let bookId = useParams().bookId
    let [showSuccess, setSuccess] = useState(false);
    let [showFail, setFail] = useState(false);
    let outhRequest = useOuthRequest();

    function displayBox(state) {
        state(true)
        setTimeout(() => { state(false) }, 3000)
    }

    function addToCart() {
            add(bookId, outhRequest)
            .then((res) => displayBox(setSuccess))
            .catch((err) => displayBox(setFail))        
    }

    return (
        <StyledDiv>
            <StyledButton onClick={addToCart}> Add <StyledIcon src={cartIcon} /></StyledButton>
            <StyledPopUp className="success" isOpen={showSuccess}>
                <StyledSmallHeading><span>"{title}"</span> was added to cart</StyledSmallHeading>
            </StyledPopUp>
            <StyledPopUp className="fail" isOpen={showFail}>
                <StyledSmallHeading><span>"{title}"</span> is already added to cart</StyledSmallHeading>
            </StyledPopUp>
        </StyledDiv>
    )

};

export default AddButton