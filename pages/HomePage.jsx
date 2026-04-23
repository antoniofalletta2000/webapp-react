import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesMap from "../components/MoviesMap";

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const endpoint = "http://localhost:3000/movies"
    
    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <>
            <div className="container mt-5 pb-5">
                <div id="span" className="p-3 card border-0">
                    <h1 className="text-black fw-bold">All Movies</h1>
                    <h3 id="span_welcome">So glad you're here! This is the place where films get discussed, celebrated — and occasionally torn apart. 🎥
                        <br />
                        Browse the list, find a movie you've seen, and drop a review — long, short, passionate or brutal: as long as it's honest, it belongs here!🍿</h3>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {movies.map(movie => (
                        <MoviesMap key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}