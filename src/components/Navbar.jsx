import {Navbar, Nav} from 'react-bootstrap'
import logo from '../assets/icon_new.png'
import { useHistory } from "react-router-dom";

export default function NavbarComponent() {
    let history = useHistory()

    return (
        <Navbar className="mt-2 mx-5" expand="lg">
                <Navbar.Brand style={{"cursor":"pointer"}} onClick={()=>history.push('/')}>
                    <img style={{width:"40px",height:"40px"}} src={logo} alt=""/>
                    <span className="nav-logo"> Skills.id</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="me-2 nav-link" href="#home">Course</Nav.Link>
                        <Nav.Link className="me-2 nav-link" href="#home">Category</Nav.Link>
                        <Nav.Link className="me-3 nav-link" href="#home">Become Instructor</Nav.Link>
                        <button onClick={()=>history.push('/login')} className="btn-auth">
                            Register/Login
                        </button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}
