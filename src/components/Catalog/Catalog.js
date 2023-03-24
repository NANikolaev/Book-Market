import { useState, useContext, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import { CatalogContext } from "../../contexts";

import { StyledSection, StyledList, StyledItem, StyledHeding } from "./elements";
import Bookshelf from "../Bookshelf/Bookshelf";
import { genres } from "../../constants";

const Catalog = () => {
    let [catalog] = useContext(CatalogContext);
    let [genre, setGenre] = useState('All Genres');
    let sorted = catalog.filter(book => book.genre === genre.toLowerCase());

    useEffect(() => {
        const resetGenre = (e) => {
            if (e.target.textContent === "Catalog") {setGenre('All Genres')}
        }
        document.body.addEventListener('click', resetGenre);
        return () => document.body.removeEventListener('click', resetGenre);
    }, [])

    function changeGenre(e) {
        if (e.target.tagName === "A") {
            setGenre(e.target.textContent)
        }
    }


    return (
        <StyledSection >
            <StyledList onClick={changeGenre}>
                {genres.map((g, i) => <StyledItem key={i}><Link to={g.value}>{g.name}</Link></StyledItem>)}
            </StyledList>
            <StyledHeding>{genre}</StyledHeding>
            <Routes>
                <Route path={genre} element={<Bookshelf books={sorted} />} />
                <Route path="*" element={<Bookshelf books={catalog} />} />
            </Routes>
        </StyledSection>
    )

};

export default Catalog