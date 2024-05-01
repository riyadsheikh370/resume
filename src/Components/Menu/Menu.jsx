import React from 'react'
import './menu.css'
import Logo from "../../assets/logo.png"
import { Navbar, Container, Nav } from 'react-bootstrap'
import ScrollspyNav from "react-scrollspy-nav";


const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="menu_bg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <div className="nav">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#work">Portfolio</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu
