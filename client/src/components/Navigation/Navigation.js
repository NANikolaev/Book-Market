import "./Navigation.css"

import { useContext } from 'react'
import { Link, } from 'react-router-dom'

import OuthContext from "../../contexts/OuthContext"
import User from '../User/User'

import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,

} from 'reactstrap'


function Navigation() {
    const [user] = useContext(OuthContext)

    return (
        <Navbar
            expand="md"
            light
        >
            <NavbarBrand tag={Link} to="/home">
                <i className="fa fa-home"></i>
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav pills
                    className="me-auto"
                    navbar

                >
                    <NavItem>
                        <NavLink tag={Link} to="/about">
                            About
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} to="/books ">
                            Books
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} to="/search">
                            <i className="fa fa-fw fa-search"></i>
                            Search
                        </NavLink>
                    </NavItem>

                </Nav>
                {user
                    ? <User />

                    : <Nav pills navbar>
                        <NavItem >
                            <NavLink tag={Link} to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/register">
                                Register
                            </NavLink>
                        </NavItem>
                    </Nav>}

            </Collapse>
        </Navbar>
    )
}


export default Navigation