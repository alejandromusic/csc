import React from 'react';
import './MyNavbar.css';


// bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


class MyNavbar extends React.Component {

  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img 
            alt="USC Logo"
            height="30"
            src="https://academics.usc.edu/wp-content/themes/usc_gateway/images/usc-logo.svg" />
          <span>
            CSC - List
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Reports</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Report</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Report2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default MyNavbar;
