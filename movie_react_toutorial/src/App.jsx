import './App.css'
import './components/Footer.css'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
