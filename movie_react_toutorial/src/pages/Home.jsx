import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "The Potato", release_date: 1994 },
    { id: 2, title: "The Onion", release_date: 1990, },
    { id: 3, title: "The Tomato", release_date: 1999 },
    { id: 4, title: "The Garlic", release_date: 2010 },
    { id: 5, title: "The Carrot", release_date: 2020 },
    { id: 6, title: "The Peanut", release_date: 1989 },
    { id: 7, title: "The Chesse", release_date: 2020 },
    { id: 8, title: "The Banana", release_date: 2023 },];
  return (
    <div className="home">
        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
  );
}

export default Home;