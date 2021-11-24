import { Navbar, Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Plans from './components/Plans';
import Footer from './components/DetailsHome/Footer';
import background from "./imgs/Background.jpg"
import Sucursales from './components/Sucursales/Sucursales';
function App() {
  return (
    <div className="App">
      <div className ="background">
        <img src = {background}/>
      </div>
      <NavBar/>
      <Container xs = {11} className='bg-light shadow-1-strong'>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/plans" element={<Plans/>}/>
      </Routes>
      <Routes>
        <Route path="/sucursales" element={<Sucursales/>}/>
      </Routes>
      </Container>
    </div>
  );
}

export default App;
