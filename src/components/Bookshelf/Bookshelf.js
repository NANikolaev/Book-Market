import { useState, useEffect } from "react";
import { StyledDiv, StyledTinyHeading } from "./elements";
import PreviewCard from "../Cards/PreviewCard/PreviewCard";
import Pagination from "../Pagination/Pagination";

const Bookshelf = ({ books }) => {

    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => { setCurrentPage(1) }, [books]);

    let booksPerPage = 15
    let indexOfLastBook = currentPage * booksPerPage
    let indexOfFirstBook = indexOfLastBook - booksPerPage
    let currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

    return (
        <StyledDiv>
            {books.length > 0
                ? <>
                    {currentBooks.map((b, i) => <PreviewCard key={i} book={b} />)}
                    <Pagination setPage={setCurrentPage} bookCount={books.length} />
                  </>
                : <StyledTinyHeading>There are no books from this genre yet.</StyledTinyHeading>
            }

        </StyledDiv>
    )

};

export default Bookshelf
