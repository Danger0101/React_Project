import './css/App.css';
import Home from './pages/Home';
import Favorite from './pages/Favorites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MovieProvider }  from './contexts/MovieContext';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  )
}

export default App
