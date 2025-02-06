import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    { id: 1, title: "The Potato", release_date: 1994 },
    { id: 2, title: "The Onion", release_date: 1990, },
    { id: 3, title: "The Tomato", release_date: 1999 },
    { id: 4, title: "The Garlic", release_date: 2010 },
    { id: 5, title: "The Carrot", release_date: 2020 },
    { id: 6, title: "The Peanut", release_date: 1989 },
    { id: 7, title: "The Chesse", release_date: 2020 },
    { id: 8, title: "The Banana", release_date: 2023 },];

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