import { useParams, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import penIcon from "../../assets/icons/icons8-quill-pen-48.png";

import AddButton from "../Buttons/AddtoCartButton/AddButton";
import Description from "./Description/Description";
import Comments from "./Comments/Comments";
import Edit from "./Edit/Edit";

import { CatalogContext, OuthContext } from "../../contexts";
import { getSpecificBook } from "../../services";

import {
    StyledSection,
    StyledArticle,
    StyledDiv,
    StyledImage,
    StyledHeading,
    StyledSmallHeading,
    StyledIcon,
    StyledDescriptionList,
    StyledDescriptionItem,
    StyledNavList,
    StyledNavItem,
    StyledTinyHeading,
    StyledParagraph
} from "./elements";


const Details = () => {

    let bookId = useParams().bookId;
    let [active, setActive] = useState(1)
    let [catalog, setCatalog] = useContext(CatalogContext);
    let [user] = useContext(OuthContext);
    let book = catalog.find(b => b._id === bookId);
    let index = catalog.indexOf(book);
    useEffect(() => {
        getSpecificBook(bookId, user)
            .then(newBook => {
                setCatalog(() => {
                    let newCatalog = catalog.slice();
                    newCatalog[index] = newBook;
                    return newCatalog;
                })
            });
    }, [])


    return (
        <StyledSection>
            <StyledArticle>
                <StyledDiv>
                    <StyledImage src={book.image.url} />
                    <StyledParagraph><span>viewed:</span> {book.views}</StyledParagraph>
                </StyledDiv>
                <StyledDiv>
                    <StyledHeading>{book.title}</StyledHeading>
                    <StyledSmallHeading><StyledIcon src={penIcon} /><span>By :</span> {book.author}</StyledSmallHeading>
                    <StyledDescriptionList>
                        <StyledDescriptionItem><span>Pages : </span>{book.pages}</StyledDescriptionItem>
                        <StyledDescriptionItem><span>Released on : </span>{book.year}</StyledDescriptionItem>
                        <StyledDescriptionItem><span>Genre : </span>{book.genre}</StyledDescriptionItem>
                        <StyledDescriptionItem><span>Price : </span> ${book.price}</StyledDescriptionItem>
                    </StyledDescriptionList>
                    {!user && <StyledTinyHeading><Link to='/sign-in'>Sign in</Link> / <Link to='/sign-up'>Sign up</Link> to order</StyledTinyHeading>}
                    {user && user.id !== book.owner && <AddButton title={book.title} />}
                </StyledDiv>
            </StyledArticle>
            <StyledDiv>
                <StyledNavList onClick={(e) => e.target.tagName === "A" ? (setActive(+e.target.id)) : ''}>
                    <StyledNavItem active={active === 1}><Link id="1" to='description'>Description</Link></StyledNavItem>
                    <StyledNavItem active={active === 2}><Link id="2" to='comments'>Comments</Link></StyledNavItem>
                    {user && user.id === book.owner && <StyledNavItem active={active === 3}><Link id="3" to='edit'>Edit</Link></StyledNavItem>}
                </StyledNavList>
                <Routes>
                    <Route path='/' element={<Description description={book.description} />} />
                    <Route path='description' element={<Description description={book.description} />} />
                    <Route path='comments' element={<Comments book={book} setCatalog={setCatalog} user={user} />} />
                    <Route path='edit' element={user && user.id === book.owner && <Edit book={book} setCatalog={setCatalog} setActive={setActive}/>}/>
                </Routes>
            </StyledDiv>
        </StyledSection>
    )

};

export default Details