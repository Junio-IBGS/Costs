import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layouts/Cotainer';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer'



function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />

        </Routes>
      </Container>
     <Footer />
    </Router>

  )
}

export default App;
