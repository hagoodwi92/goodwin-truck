import React from 'react';
import goodwinImage from './../img/goodwin-logo.jpg';
import { ButtonGroup, Dropdown, Button, DropdownButton, Navbar, Nav } from 'react-bootstrap';




function Header (){
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Goodwin's Truck and Equipment</Navbar.Brand>
      {/* <Navbar.Brand href="#home"><img src = {goodwinImage} alt='logo' /></Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#aboutus">About Us</Nav.Link>
      <Nav.Link href="#directions">Directions</Nav.Link>
      
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>

<ButtonGroup vertical>
  <Button>Buses</Button>
  <Button>Dump Trucks</Button>
  <Button>Garbage Trucks</Button>
  <Button>Tractors</Button>
  <Button>Trailers</Button>
  <Button>Utility Trucks</Button>
  <Button>Van Trucks</Button>
  <Button>Yard Equipment</Button>
  <Button>Parts</Button>
</ButtonGroup>
    
    </React.Fragment>
  );
}

export default Header;