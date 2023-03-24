import { useRef, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ErrorContext } from "../../../contexts";

import { genres } from "../../../constants";
import { onChange,onClick } from "./utils";

import {useOuthRequest} from "../../../hooks";
import { updateOffer } from "../../../services/bookService";

import {
    StyledDiv,
    StyledHeading,
    StyledForm,
    StyledFormGroup,
    StyledLabel,
    StyledInput,
    StyledSubmitInput,
    StyledButton,
    StyledSelect,
    StyledParagraph,
    StyledTextArea
} from "./elements";

const Edit = ({ book,setCatalog,setActive }) => {
    let inputFile = useRef(null);
    let [fileName, setFileName] = useState(book.image.name);
    let currentGenre = genres.find(g => g.value === book.genre);
    let restOfGenres = genres.filter(g => g.value !== book.genre);
    let showError=useContext(ErrorContext)

    let outhRequest=useOuthRequest();
    let navigate=useNavigate();

    function editOffer(e){
        updateOffer(e,book._id,outhRequest)
        .then(newOffer=>{
            setCatalog(catalog=>{
                let newCatalog=catalog.slice();
                let index=catalog.indexOf(book);
                newCatalog[index]=newOffer;
                return newCatalog;
            })
           setActive(1)
           navigate(`/book/details/${newOffer._id}`)
        })
        .catch(err=>showError(err))
       
    }
    
    return (
        <StyledDiv>
            <StyledHeading>{book.title}</StyledHeading>
            <StyledForm onSubmit={editOffer}>
                <StyledFormGroup>
                    <StyledLabel htmlFor="title">Title</StyledLabel>
                    <StyledInput type='text' name='title' minLength={2} placeholder="title" defaultValue={book.title} required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="pages">Pages</StyledLabel>
                    <StyledInput type="number" min={5} name="pages" placeholder="pages" defaultValue={book.pages} required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="author">Author</StyledLabel>
                    <StyledInput type="text" name="author" placeholder="author" defaultValue={book.author} required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="price">Price $</StyledLabel>
                    <StyledInput type="number" min={0} step="any" name="price" placeholder="0.00" defaultValue={book.price} required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="year">Release on</StyledLabel>
                    <StyledInput type="number" min={1000} max={2022} name="year" placeholder="year" defaultValue={book.year} required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="genre">Genre:</StyledLabel>
                    <StyledSelect name="genre">
                        <option value={currentGenre.value}>{currentGenre.name}</option>
                        {restOfGenres.map((g, i) => <option key={i} value={g.value}>{g.name}</option>)}
                    </StyledSelect>
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledButton onClick={(e) => onClick(inputFile, e)}>Upload Image</StyledButton>
                    <StyledInput type="file" name="image" ref={inputFile} onChange={(e) => onChange(setFileName, e)}/>
                    <StyledParagraph>{fileName}</StyledParagraph>
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="description">Description</StyledLabel>
                    <StyledTextArea name="description" minLength={15} defaultValue={book.description} required></StyledTextArea>
                </StyledFormGroup>
                <StyledSubmitInput type='submit' value="Edit"/>
            </StyledForm>
        </StyledDiv>
    )
};

export default Edit