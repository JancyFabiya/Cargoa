import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";




const Header = () => {
  const navigate = useNavigate();
  let user = localStorage.getItem('userInfo')
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">CARGOA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '65%' }}>
            <Nav className="m-auto" >

              <Button variant="dark"
                style={{ color: 'white' }}
                onClick={() => {
                  if (!user) {
                    navigate('/user/login')
                  } else {
                    localStorage.removeItem("userInfo")
                    navigate("/");
                  }

                }}
              >{user ? 'Logout' : 'Login'}</Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header