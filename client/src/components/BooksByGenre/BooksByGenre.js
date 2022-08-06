import "./BooksByGenre.css"
import PreviewCard from "../Cards/Preview-Card"
import PaginationComp from "../Pagination/Pagination"

import {useState,useEffect} from 'react'

function BooksByGenre({ books, genre }) {

    const [currentPage, setCurrentPage] = useState(1)
     
    useEffect(()=>{
        setCurrentPage(1)
    },[genre])
     
    const booksPerPage=12
    const indexOfLastBook=currentPage*booksPerPage
    const indexOfFirstBook=indexOfLastBook-booksPerPage
    const currentBooks=books.slice(indexOfFirstBook,indexOfLastBook)


    return (
        <div className="books">
            <h3>{genre || "All Books"}</h3>
            {books.length > 0
                ? <>
                    <div className="books-container">
                        {currentBooks.map(book => <PreviewCard key={book._id} book={book} />)}
                    </div>
                    <br></br>
                    <PaginationComp setPage={setCurrentPage} booksPerPage={booksPerPage} totalBooks={books.length} />
                  </>
                : <h2 className="no-books">There are no books from this genre yet.</h2>
            }
        </div>

    )
}

export default BooksByGenre