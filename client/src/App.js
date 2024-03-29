import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, NavLink, Nav, Button, Form, FormControl, Table } from 'react-bootstrap';
import foodOrder from './components/foodOrder';
import login from './components/login';
import Home from './components/home';
import Employee from './components/Employee'
import DeatiledDishes from './components/detaileddish';
function About() {
  return <h2>Home</h2>;
}
function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Future Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/foodorder">Food order</Nav.Link>
              <Nav.Link href="/delivery">Delivery</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Route path="/home" component={Home} />
      <Route path="/foodorder" component={foodOrder} />
      <Route path="/delivery" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={login} />
      <Route path="/dishes" component={DeatiledDishes} />
      <Route path="/employee" component={Employee} />
    </Router>
  );
}

export default App;
