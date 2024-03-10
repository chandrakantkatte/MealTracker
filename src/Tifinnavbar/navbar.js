import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import RegistrationForm from './Registationform';
import Loginform from './Loginform';

function BasicExample() {
  return (
    <Router>
      <>
        <Navbar expand="lg" className="bg-body-tertiar">
          <Container>
            <Nav.Link as="div" className="navbarname">
              <Link to="/" className="ojuju-font">
                MealTracker
              </Link>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbarname1">
                <NavLink as={Link} to="/" className="navbarname" activeClassName="active">
                  Home
                </NavLink>
                <NavLink as={Link} to="/registration" className="navbarname" activeClassName="active">
                  Registration
                </NavLink>
                <NavLink as={Link} to="/login" className="navbarname" activeClassName="active">
                  Login
                </NavLink>
                <NavLink as={Link} to="/ck" className="navbarname" activeClassName="active">
                  Login
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          {/* <Route path="/" element={<LoginSignUp />} /> */}
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<Loginform />} />
        </Routes>
      </>
    </Router>
  );
}

export default BasicExample



// // BasicExample.js
// import Container from 'react-bootstrap/Container';
// import React, { useState } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './navbar.css';
// import RegistrationForm from './Registationform';
// import Loginform from './Loginform';

// function BasicExample() {
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);

//   const handleRegistrationButtonClick = () => {
//     setShowRegistrationForm(true);
//     setShowLoginForm(false);
//   };

//   const handleLoginButtonClick = () => {
//     setShowLoginForm(true);
//     setShowRegistrationForm(false);
//   };

//   const handleCloseForms = () => {
    
//     setShowLoginForm(false);
//     setShowRegistrationForm(false);
//   };
  


//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiar">
//         <Container>
//           <Navbar.Brand href="#home" className="ojuju-font">MealTracker</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="navbarname1">
//               <Nav.Link onClick={handleCloseForms} className="navbarname">Home</Nav.Link>
//               <Nav.Link onClick={handleRegistrationButtonClick} className=" navbarname ">Registration</Nav.Link>
//               <Nav.Link onClick={handleLoginButtonClick} className="navbarname ">Login</Nav.Link>
//               <Nav.Link href="#home" className="navbarname ">LogOut</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Conditional Rendering of RegistrationForm */}
//       {showRegistrationForm && <RegistrationForm handleClose2={handleLoginButtonClick} />}

//       {/* Conditional Rendering of LoginForm */}
//       {showLoginForm && <Loginform handleClose={handleRegistrationButtonClick } />}
//     </>
//   );
// }

// export default BasicExample;
















// import Container from 'react-bootstrap/Container';
// import React, { useState } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Registationform from './Registationform';

// function BasicExample() {
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);

//   const handleRegistrationButtonClick = () => {
//     setShowRegistrationForm(true);
//   };

//   const handleRegistrationFormClose = () => {
//     setShowRegistrationForm(false);
//   };

//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiar">
//         <Container>
//           <Navbar.Brand href="#home" className="ojuju-font">YumYumCounter</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className="me-2">Home</Nav.Link>
//               <Nav.Link onClick={handleRegistrationButtonClick} className="me-3">Registration</Nav.Link>
//               <Nav.Link href="#home" className="me-2">Login</Nav.Link>
//               <Nav.Link href="#home" className="me-3">LogOut</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Registration Form Modal */}
//       <Registationform show={showRegistrationForm} handleClose={handleRegistrationFormClose} />
//     </>
//   );
// }

// export default BasicExample;
