import "./Search.css";
import { useState, useEffect } from "react";

import PreviewCard from "../Cards/Preview-Card";
import PaginationComp from "../Pagination/Pagination";

import { getCatalog } from "../../services/bookService"

function Search() {

    const [catalog, setCatalog] = useState([])
    const [show, setShow] = useState('none')
    const [option, setOption] = useState('author')
    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        getCatalog()
            .then(catalog => setCatalog(catalog))
    }, [])

    useEffect(() => {
        let filteredData = catalog.filter(x => x[option].toLowerCase() === searchText.toLowerCase())
        setSearchResults(filteredData)
        
    }, [searchText])

    function onSubmit(e) {
        e.preventDefault()
        let text = e.currentTarget.text.value
        e.currentTarget.text.value = ""
        if (text) {
            setCurrentPage(1)
            setShow("block")
            setSearchText(text)
        }
    }


    const booksPerPage = 12
    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage
    const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook)

    return (
        <div className="search">
            <div className="search-form">
                <h4>Search</h4>
                <form onSubmit={onSubmit}>
                    <input type="search" id="search-field" placeholder="search.." name="text" ></input>
                    <label>by:</label>
                    <select onChange={(e) => setOption(e.target.value)} id="search-opt" >
                        <option value="author">Author</option>
                        <option value="title">Title</option>
                    </select>
                    <input type="submit" id="search-btn" value="Search"></input>
                </form>
            </div>
            <div style={{ display: show }} className="search-results" >
                {searchResults.length > 0
                    ? <>
                        <h2 className="no-books">Results found: {searchResults.length}</h2>
                        <div className="result-container">
                            {currentBooks.map(book => <PreviewCard key={book._id} book={book} />)}
                        </div>
                        <PaginationComp setPage={setCurrentPage} booksPerPage={booksPerPage} totalBooks={searchResults.length} />
                    </>
                    : <h2 className="no-books">No Results found.</h2>
                }
            </div>
        </div>
    )
}

export default Search