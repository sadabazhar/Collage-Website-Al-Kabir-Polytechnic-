import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Logo from './utils/images/Alkabirlogo.jpeg'

function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="https://akp.ac.in/" className='navbar-brand d-flex align-items-center'>
            <svg width="68" height="68" viewBox="0 0 48 48" style={{ marginRight: '10px', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'white' }}>
            <circle cx="24" cy="24" r="24" fill="white" />
            <image href={Logo} x="4" y="4" height="40" width="40" style={{ borderRadius: '50%' }} />
            </svg>
              <span className='mx-2 text-light lh-1 fw-semibold'>
                Al-Kabir
                <br></br>
                Institute Of Management & Technology
                <br></br>
                Jamshedpur, Jharkhand
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/courses' className='text-uppercase'>Our courses</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About us</Nav.Link>
              <Nav.Link href='/blog' className='text-uppercase'>Blog</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Get in touch</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <style>
                {`
                  .custom-hover {
                    background-color: #06D001;
                    border-color: #ffffff;
                    color: white;
                  }
                  .custom-hover:hover {
                    border-color: #ffffff;
                    background-color: green;
                  }
                `}
              </style>
              <Link to="/contact">
              <button type="button" class="btn btn-outline-danger btn-lg mb-5 mb-md-4 custom-hover">Get In Touch</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between margin-top'>
                <Link to="https://www.facebook.com/alkabir.jamshedpur">
                  <li>
                  <i class="fa-brands fa-facebook fa-2xl"></i>
                  </li>
                </Link>
                <Link to="https://www.linkedin.com/company/al-kabir-polytechnic-jamshedpur/">
                  <li>
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </li>
                </Link>
                <Link to="https://x.com/alkabir_jsr">
                  <li>
                  <i class="fa-brands fa-twitter fa-2xl"></i>
                  </li>
                </Link>
                <Link to="https://www.youtube.com/channel/UCJzyWQz-nULCqir7vdDI7Dg">
                  <li>
                  <i class="fa-brands fa-youtube fa-2xl"></i>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/courses" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Our courses</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>About us</li>
                    </Link>
                    <Link to="/blog" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Blog</li>
                    </Link>
                    <Link to="/contact" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Get In Touch</li>
                    </Link>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p>Kapali, Via : Mango, Jamshedpur, Jharkhand, INDIA, Pin Code : 831012</p>
                    </li>
                    <li>
                      <p>Phone Number - 6591260414</p>
                    </li>
                    <li>
                      <p>Email - info@akp.ac.in</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-body-tertiary'>
          <div className='container'>
            <p className='p-3 m-0 text-center'>copyright @ made by Sadab Azhar</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
