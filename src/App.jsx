import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Aboutme from './components/Aboutme.jsx'

function App() {

  return (
    <>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/portfolio' element={ <Portfolio /> } />
            <Route path='/aboutme' element={ <Aboutme /> } />
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
