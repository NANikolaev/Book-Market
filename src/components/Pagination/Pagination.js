import { StyledList, StyledItem, StyledImage } from "./elements";
import lastIcon from '../../assets/icons/icons8-next-page-64.png';
import firstIcon from '../../assets/icons/icons8-back-to-64.png';
import backIcon from '../../assets/icons/icons8-back-64.png';
import forthIcon from '../../assets/icons/icons8-forward-64.png';

const Pagination = ({ setPage, bookCount }) => {

    let booksPerPage = 15;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(bookCount / booksPerPage); i++) {
        pageNumbers.push(i)
    }

    function changePage(e) {
        if (e.target.tagName === "LI") {
           setPage(Number(e.target.textContent))
       }
    }

    return (
        <StyledList className="pagination" onClick={changePage} >
         <StyledItem key='first' onClick={() => setPage(1)} ><StyledImage src={firstIcon}/></StyledItem>
            <StyledItem key='back' onClick={() => setPage(page => page > 1 ? --page : page)}><StyledImage src={backIcon}/></StyledItem>
            {pageNumbers.map(page => <StyledItem key={page}>{page}</StyledItem>)}
            <StyledItem key='forth' onClick={() => setPage(page =>page < pageNumbers.length ? ++page : page)}><StyledImage src={forthIcon}/></StyledItem>
            <StyledItem key='last' onClick={() => setPage(pageNumbers.length)}><StyledImage src={lastIcon} /></StyledItem>
        </StyledList>
    )

};

export default Pagination