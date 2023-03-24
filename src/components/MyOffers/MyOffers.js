import { useParams,Link } from "react-router-dom";
import { useContext } from "react";
import { CatalogContext } from "../../contexts";

import OfferCard from "../Cards/OfferCard/OfferCard";

import { StyledSection,StyledHeading,StyledSpan,StyledInnerHeading,StyledList } from "./elements";

const MyOffers=()=>{
    let userId=useParams().userId;
    let [catalog,setCatalog]=useContext(CatalogContext);
    let userOffers=catalog.filter(b=>b.owner === userId)


    return (
        <StyledSection>
          <StyledHeading><StyledSpan>{userOffers.length}</StyledSpan> Offers</StyledHeading>
           {userOffers.length < 1
            ? <StyledInnerHeading>Currently no offers - <Link className="redirect" to="/add-offer">Add Book</Link></StyledInnerHeading>
            : <StyledList>{userOffers.map((b,i)=><OfferCard key={i} book={b} setCatalog={setCatalog}/>)}</StyledList>
            }

        </StyledSection>
    )

};

export default MyOffers