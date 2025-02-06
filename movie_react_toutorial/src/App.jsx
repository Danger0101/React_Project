import './App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  )
}

export default App
