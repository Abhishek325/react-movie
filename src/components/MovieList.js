import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const resp = await fetch("https://swapi.dev/api/films/");
      const data = await resp.json();
      // console.log(data.results);
      setMovies(data.results);
      setIsLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {isLoading && <p>Fetching the list of movies for you...</p>}
      {!isLoading &&
        movies?.map((movie, index) => <MovieCard movie={movie} key={index} />)}
    </div>
  );
};

export default MovieList;
