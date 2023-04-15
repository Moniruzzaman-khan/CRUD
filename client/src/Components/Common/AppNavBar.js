import React from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const AppNavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand>CRUD</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link><NavLink to="/">List</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/create">Create</NavLink></Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
            <NavDropdown.Item href="Electronics">Electronics</NavDropdown.Item>
            <NavDropdown.Item href="Cloths">
            Cloths
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="Grocery">
            Grocery
            </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default AppNavBar;