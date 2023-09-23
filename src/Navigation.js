import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link, NavLink, Route, Routes} from 'react-router-dom';
import './ortiz.css';
import Home from './Component/Home';
import Services from './Component/Services';
import Features from './Component/Features';
import Agent from './Component/Agent';
import Contact from './Component/Contact';
import { IoSearch } from 'react-icons/io5';


function Navigation() {
  return (
    <div>
          <Navbar expand="lg" className="bacg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src='Images/logo.webp' alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 navdes" navbarScroll>
            <NavLink as={Link} to="/">Home</NavLink>
            <NavLink as={Link} to="/services">Services</NavLink>
            <NavLink as={Link} to="/features">Features</NavLink>
            <NavLink as={Link} to="/agent">Agent</NavLink>
            <NavLink as={Link} to="/contact">Contact</NavLink>
          </Nav>
          <div className='ser'><IoSearch/></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/features' element={<Features/>}></Route>
          <Route path='/agent' element={<Agent/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Navigation;