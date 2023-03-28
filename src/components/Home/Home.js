import { useContext } from 'react';
import { CatalogContext } from '../../contexts';

import poster from '../../assets/images/nightmarket2022.png'
import Carausel from "../Carousel/Carousel";
import Bookshelf from '../Bookshelf/Bookshelf';

import { StyledArticle, StyledPoster, StyledSection, StyledHeading } from './elements';

const Home = () => {
  let [catalog] = useContext(CatalogContext)
  let newest = catalog.slice(catalog.length - 10);
  let top15 = catalog.sort((a, b) => b.views - a.views).slice(0, 15)


  return (
    <StyledSection>
      <StyledArticle>
        <StyledPoster src={poster} alt='poster' />
      </StyledArticle>
      <StyledHeading>Recently Added</StyledHeading>
      <Carausel newest={newest} />
      <StyledHeading>Most Viewed</StyledHeading>
       {top15.length > 0 ? <Bookshelf books={top15}/> : ''}
    </StyledSection>
  )
};

export default Home