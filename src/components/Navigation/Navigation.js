import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { OuthContext } from '../../contexts';
import cartIcon from '../../assets/icons/icons8-shopping-cart-100.png';
import { StyledNav,StyledDiv, StyledIcon, StyledList, StyledItem } from './elements';

const Navigation = () => {
  let [user,changeUserState,navigate] = useContext(OuthContext);
  let [show, setShow] = useState(false);

  function signOff(){
     changeUserState('');
     navigate('/home')
     setShow(!show)
  }

  useEffect(() => {
    const closeDropDown = (e) => {
      if (e.target.textContent !== 'Profile') {
        setShow(false)
      }
    };
    document.body.addEventListener('click', closeDropDown);
    return () => document.body.removeEventListener('click', closeDropDown);
  }, [])

  return (

    <StyledNav >
      {user
        ? <StyledList>
          <StyledItem><Link to={`/user/${user.id}/cart`}><StyledIcon src={cartIcon} width='50px'/></Link></StyledItem>
          <StyledItem><Link to='/catalog'>Catalog</Link></StyledItem>
          <StyledItem onClick={()=>setShow(!show)}>Profile</StyledItem>
        </StyledList>
        : <StyledList>
          <StyledItem><Link to='/catalog'>Catalog</Link></StyledItem>
          <StyledItem><Link to='/sign-in'>Sign in</Link></StyledItem>
          <StyledItem><Link to='/sign-up'>Sign up</Link></StyledItem>
        </StyledList>
      }
      <StyledDiv show={show}>
           <StyledList>
             {user ? <StyledItem><Link to={`/user/${user.id}/offers`}>My Offers</Link></StyledItem> : ''}
             <StyledItem><Link to='/add-offer'>Add Offer</Link></StyledItem>
             <StyledItem onClick={signOff}>Sign Off</StyledItem>
           </StyledList>
      </StyledDiv>
    </StyledNav>

  )

};

export default Navigation
