import { Navbar } from 'react-bootstrap';
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
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/plans" element={<Plans/>}/>
      </Routes>
      <Routes>
        <Route path="/sucursales" element={<Sucursales/>}/>
      </Routes>
    </div>
  );
}

export default App;
