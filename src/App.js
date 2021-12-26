// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Novedades from './pages/Novedades';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/nosotros" exact element={<Nosotros/>} />
        <Route path="/novedades" exact element={<Novedades/>} />
        <Route path="/contacto" exact element={<Contacto/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
