// import logo from './logo.svg';
// import './App.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/nosotros"  exact element={<NosotrosPage/>} />
        <Route path="/novedades"  exact element={<NovedadesPage/>} />
        <Route path="/contacto"  exact element={<ContactoPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
