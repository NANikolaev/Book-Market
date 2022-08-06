import "./Pagination.css"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link, } from 'react-router-dom';

function PaginationComp({ setPage, booksPerPage, totalBooks }) {

    const pages = []
    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pages.push(i)
    }

    function changePage(e) {
        if (e.target.tagName == "A") {
            setPage(Number(e.target.textContent))
        }
    }

    return (
        <Pagination onClick={changePage}>
            {pages.map(page => 
                 <PaginationItem key={page}>
                    <PaginationLink tag={Link} to="#">
                        {page}
                    </PaginationLink>
                </PaginationItem>
            )}
        </Pagination>

    )

}

export default PaginationComp