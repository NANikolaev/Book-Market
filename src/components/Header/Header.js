import { Link, useNavigate,createSearchParams } from 'react-router-dom';
import { useState } from 'react';

import bookIcon from '../../assets/icons/3d-books-stack-education-learning-studying-and-information-concept-realistic-3d-high-quality-render-isolated-png.webp';
import searchIcon from '../../assets/icons/icons8-search-24.png';
import {
    StyledImage,
    StyledHeader,
    StyledLogo,
    StyledForm,
    StyledInput,
    StyledSearchButton,
} from './elements';

import Navigation from '../Navigation/Navigation';

const Header = () => {

    let [text,setText]=useState('');
    let navigate = useNavigate();
    let params = { text: text};

    function onSubmit(e) {
        e.preventDefault();
        if(text !== ''){
        navigate({ pathname:'/search',search:`?${createSearchParams(params)}`})
        }
        setText('');
        e.target.reset()
    }

    return (
        <StyledHeader>
            <Link to='/home'><StyledImage src={bookIcon} width='110px' /></Link>
            <StyledLogo>My Book market</StyledLogo>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput onChange={(e)=>setText(e.target.value)} type='search' name='text' placeholder='search...' autoComplete='off'/>
                <StyledSearchButton type="submit"><StyledImage src={searchIcon} /></StyledSearchButton>
            </StyledForm>
            <Navigation />
        </StyledHeader>
    )

};

export default Header