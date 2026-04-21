import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const url = "http://localhost:3000"

    const endpoint = "http://localhost:3000/movies"
    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <>
            <div className="container mt-5 pb-5">
                <div className="pb-3">
                    <h1>All Movies</h1>
                    <h3 className="text-secondary">So glad you're here! This is the place where films get discussed, celebrated — and occasionally torn apart. 🎥
                        <br />
                        Browse the list, find a movie you've seen, and drop a review — long, short, passionate or brutal: as long as it's honest, it belongs here!</h3>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div id="movies_card" className="card text-white bg-black">
                                <h4 className="card-title d-flex justify-content-center pt-5">{movie.title}</h4>
                                <div className="card-body">
                                    <img id="movies_image" src={`${url}/${movie.image}`} alt={movie.title} className="img-fluid" />
                                    <p className="card-text pt-2">
                                        <p className="fw-bold">Abstract: </p>
                                        {movie.abstract}
                                    </p>
                                    <p className="d-flex justify-content-end">Release Date: {movie.release_year}</p>
                                    <div  className="d-flex justify-content-end">
                                        <button className="btn border bg-primary">
                                            <Link className="text-decoration-none text-white" to={`/movie/${movie.id}`}>View Movie</Link>
                                        </button>
                                    </div>



                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}