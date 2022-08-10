import "./User.css";

import { useState } from 'react';
import { Link, } from 'react-router-dom';

import { useContext } from "react";
import OuthContext from "../../contexts/OuthContext";

import {

    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu

} from 'reactstrap'


function User() {
    let [show, setShow] = useState(false)
    const [user, changeUserState,navigate] = useContext(OuthContext)
    
    function logout(){
        changeUserState("")
        navigate('/')
    }

    return (

        <>
            <ul className="book-mnj">
            
                <li className="shop-cart"><Link to='/user/cart'><i className="dr fa fa-shopping-cart "></i></Link></li>
                <li ><Link to='/add-book'>Add Book</Link></li>
            </ul>
            <Dropdown isOpen={show} className='user-profile' toggle={() => setShow(!show)} >

                <DropdownToggle caret>
                    <i className="fa fa-fw fa-user"></i>
                    Profile
                </DropdownToggle>
                <DropdownMenu container="body">
                    <DropdownItem onClick={() => { navigate(`/user/offers`) }}>
                        My Offers
                    </DropdownItem>
                    <DropdownItem onClick={logout}>
                        Logout
                    </DropdownItem>
                </DropdownMenu>

            </Dropdown>

        </>
    )
}

export default User