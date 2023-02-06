import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './NavBar.css';
import Logo from '../../Images/logo.png';
const NavBar = () => {
    return (
        <Navbar className="NavBar" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="/Home">
                    <img alt="" src={Logo} width="45" height="35"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav-links" href="/movies">Movies</Nav.Link>
                    </Nav>
                    <form class="form-inline">
                     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                     <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                    </form>           
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}
export default NavBar;