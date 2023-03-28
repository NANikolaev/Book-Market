import { useRef, useState,useContext } from "react";

import { CatalogContext,ErrorContext } from "../../contexts";

import {useOuthRequest} from "../../hooks";
import { create } from "../../services";
import { onChange,onClick } from "./utils";
import { genres } from "../../constants";



import plusIcon from '../../assets/icons/icons8-plus-math-48.png';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


import {
     StyledSection,
     StyledHeading,
     StyledIcon,
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



const AddOffer=()=>{
    let [catalog,setCatalog,navigate]=useContext(CatalogContext);
    let showError=useContext(ErrorContext)
    let inputFile = useRef(null);
    let [fileName, setFileName] = useState('');
    let[show,setShow]=useState(false);
    let outhRequest=useOuthRequest();

   function createOffer(e){    
       setShow(!show)
       create(e,outhRequest)
       .then(book=>{
        setCatalog(catalog=>[...catalog,book]);
        setShow(!show)
        navigate(`/book/details/${book._id}`);
       })
       .catch(err=>showError(err))
   }

    return (
        <StyledSection>
           <StyledHeading><StyledIcon src={plusIcon} /> Add Offer</StyledHeading>
           <StyledForm onSubmit={createOffer}>
                <StyledFormGroup>
                    <StyledLabel htmlFor="title">Title</StyledLabel>
                    <StyledInput type='text' name='title' minLength={2} placeholder="title" required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="pages">Pages</StyledLabel>
                    <StyledInput type="number" min={5} name="pages" placeholder="pages" required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="author">Author</StyledLabel>
                    <StyledInput type="text" name="author" placeholder="author" required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="price">Price $</StyledLabel>
                    <StyledInput type="number" min={0} step="any" name="price" placeholder="0.00" required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="year">Release on</StyledLabel>
                    <StyledInput type="number" min={1000} max={2022} name="year" placeholder="year" required />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="genre">Genre:</StyledLabel>
                    <StyledSelect name="genre">   
                        {genres.map((g, i) => <option key={i} value={g.value}>{g.name}</option>)}
                    </StyledSelect >
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledButton onClick={(e) => onClick(inputFile, e)}>Upload Image</StyledButton>
                    <StyledInput type="file" name="image" ref={inputFile} onChange={(e) => onChange(setFileName, e)} required />
                    <StyledParagraph>{fileName}</StyledParagraph>
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="description">Description</StyledLabel>
                    <StyledTextArea name="description" minLength={15} required></StyledTextArea>
                </StyledFormGroup>
                <StyledSubmitInput type='submit' value="Add"/>
            </StyledForm>
            <LoadingSpinner show={show} />
        </StyledSection>
    )

};

export default AddOffer