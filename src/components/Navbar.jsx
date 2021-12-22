import React, {useContext} from 'react'

import {Navbar, Nav} from 'react-bootstrap'
import logo from '../assets/icon_new.png'
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function NavbarComponent() {
    let history = useHistory()
    const {setDataUser, dataUser} = useContext(UserContext)

    const handleLogout = ()=>{
        setDataUser({
            isLogin:false,
            status :'no user'
        })
    }
    return (
        <Navbar className="mt-2 mx-5" expand="lg">
                <Navbar.Brand style={{"cursor":"pointer"}} onClick={()=>history.push('/')}>
                    <img style={{width:"40px",height:"40px"}} src={logo} alt=""/>
                    <span className="nav-logo"> Skills.id</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="me-2 nav-link" href="">Course</Nav.Link>
                        <Nav.Link className="me-2 nav-link" href="">Category</Nav.Link>
                        <Nav.Link className="me-3 nav-link" href="">Become Instructor</Nav.Link>
                        {
                            dataUser.isLogin?(
                                <button onClick={()=>handleLogout()} className="btn-auth">
                                    Logout
                                </button>                            ):(
                                <button onClick={()=>history.push('/login')} className="btn-auth">
                                    Register/Login
                                </button>
                            )
                        }

                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}
