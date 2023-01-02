import React from "react";
import { Button, Container, InputGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import logoo from './logo.png';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import HomeLogo from './HomeLogo.png';
import ParamsLogo from './ParamsLogo.png'

function NavBar() {
    const auth = useSelector((state) => state.auth.auth);
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <Navbar
            bg="dark"
            expand="sm"
            style={{ position: "sticky", top: 0, zIndex: 1,height:'65px' }}
        >
            <Container fluid>
            
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">
                        <img src={logoo} alt="logo" style={{width:'130px',marginLeft:'50px',height:'60px'}}/>
                        </Nav.Link>
                    </Nav>

                    {auth ? (
                        <>

    <Nav style={{margin:"0px -178px"}}>

            <NavDropdown
              id="nav-dropdown-dark-example"
              menuVariant="dark"
              style={{width:"40px",height:'50px'}}
            >

            <Link to="/profile">
                <img src={user?.picture} width={50} 
                style={{width:'50px',height:'50px',margin:"10px 5px"}} 
                className="rounded-circle" /> 
                <Nav.Link >
              <InputGroup.Text style={{width:"100px",margin:'10px 55px',marginTop:'-60px'}}> {user.userName} </InputGroup.Text>
              </Nav.Link>
               
            </Link>
            
              <Nav.Link as={Link} to="/" >
              <InputGroup.Text><img src={HomeLogo} alt="home" style={{width:'30px',height:'30px'}}/>Home</InputGroup.Text>
              </Nav.Link>
              <Nav.Link as={Link} to="/" >
              <InputGroup.Text><img src={ParamsLogo} alt="parametres" style={{width:'30px',height:'30px'}}/>Parametres</InputGroup.Text>
              </Nav.Link>
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

                            
  <img src={user?.picture} width={50} style={{width:'45px',height:'45px',margin:'0 155px'}} className="rounded-circle" /> 
                            
                        </>
                    ) : (
                        <>
                            <Link to="/signin">
                                <Button variant="outline-primary m-2">
                                    Login
                                </Button>
                            </Link>

                            <Link to="/registerUser">
                                <Button variant="outline-primary">
                                    Register
                                </Button>
                            </Link>
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
