import {Navbar, Nav} from 'react-bootstrap'
import logo from '../assets/icon_new.png'
export default function NavbarComponent() {
    return (
        <Navbar className="mt-2 mx-5" expand="lg">
                <Navbar.Brand href="#home">
                    <img style={{width:"40px",height:"40px"}} src={logo} alt=""/>
                    <span className="nav-logo"> Skills.id</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="me-2 nav-link" href="#home">Course</Nav.Link>
                        <Nav.Link className="me-2 nav-link" href="#home">Category</Nav.Link>
                        <Nav.Link className="me-3 nav-link" href="#home">Become Instructor</Nav.Link>
                        <button className="btn-auth">
                            Register/Login
                        </button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}
