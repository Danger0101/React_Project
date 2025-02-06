import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to load popular movies...");
      } finally {
        setLoading(false);
      } 
    };

    loadPopularMovies();
  }, []);

    const handleSearch = () => {
        e.preventDefault();
        alert(`Search for ${searchQuery}`);
        setSearchQuery('');
    };

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="seach-form">
            <input
                type="text"
                placeholder="Search For Movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
  );
}

export default Home;