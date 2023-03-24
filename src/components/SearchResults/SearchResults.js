import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import {CatalogContext} from "../../contexts"

import { StyledSection,StyledHeading,StyledSpan } from "./elements";
import Bookshelf from "../Bookshelf/Bookshelf";

const SearchResults=()=>{
 let [catalog]=useContext(CatalogContext);
 let[params,setParams]=useSearchParams();
 let text=params.get('text').toLowerCase();
 let results=catalog.filter(x=>x.title.toLowerCase() === text || x.author.toLowerCase() === text);

  return (
    <StyledSection>
     <StyledHeading>Results for : <StyledSpan>{text}</StyledSpan></StyledHeading>
      {results.length > 0
       ?<Bookshelf books={results}/>
       :<StyledHeading>No Results Found.</StyledHeading>
      }
      
    </StyledSection>
  )
};

export default SearchResults