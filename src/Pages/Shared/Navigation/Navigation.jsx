import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div><Navbar className="bg-info" expand="lg">
    <Container>
      <NavLink className="navbar-brand text-white fw-bold fs-2" activeClassName="active" to="/">
        STUDY <span className='text-primary'>CARE</span>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink
            exact
            className="nav-link mx-1 fw-bold fs-6 text-white"
            activeClassName="active bg_light_green rounded"
            to="/home"
          >
            Home
          </NavLink>
          
          <NavLink
            exact
            className="nav-link mx-1 fw-bold fs-6 text-white"
            activeClassName="active bg_light_green rounded"
            to="/Courses"
          >
            Courses
          </NavLink>
          <NavLink
            exact
            className="nav-link  mx-1 fw-bold fs-6 text-white"
            activeClassName="active bg_light_green rounded"
            to="/blog"
          >
            Blog
          </NavLink>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Navigation