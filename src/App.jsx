import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={ <Home /> } />
            {/* <Route path='/aboutme' element={o} />
            <Route path='/portfolio' element={o} /> */}
          </Routes>
        </main>
      <Footer />
    </>
  )
}

export default App
