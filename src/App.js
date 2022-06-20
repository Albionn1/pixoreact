import './App.css';
import './css/navbar.css';
import './css/main.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './components/About';
import Food from './components/Food';
import Home from './components/Home';
import Login from './components/Login';
import Restaurants from './components/Restaurants';
import Footer from './components/footer/Footer';
import ForgotPassword from './components/login/ForgotPassword';
import Register from './components/login/Register';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
       <>
      <Navbar className="navbar-custom ">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              width="300"
              height="75"
              className="d-inline-block align-top"
              alt="Pixo Logo"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/" style={{color:"#fcfeff"}}>Ballina</Nav.Link>
            <Nav.Link as={Link} to="/restaurants" style={{color:"#fcfeff"}}>Restaurants</Nav.Link>
            <Nav.Link as={Link} to="/food" style={{color:"#fcfeff"}}>Food</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{color:"#fcfeff"}}>Log In</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{color:"#fcfeff"}}>About Pixo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
    </>

    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </div>

<Footer></Footer> 
    </div>
    </BrowserRouter>
  );
}


export default App;
