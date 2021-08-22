import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <Navbar className="navbar" expand="sm">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#about">Sobre mí</Nav.Link>
                <Nav.Link href="#portfolio">Proyectos</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
