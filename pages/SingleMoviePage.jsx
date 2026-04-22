import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import MovieReviewMap from "../components/MovieReviewMap";

export default function SingleMoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const url = "http://localhost:3000"
    const endpoint = `http://localhost:3000/movies/${id}`;

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, []);

    if (movie === null) return <p>Loading...</p>;

    return (
        <>
            <div className=" pb-5">
                <div className="container pt-5">
                    <div className="d-flex justify-content-end">
                        <button className="btn border border-0 bg-primary">
                            <Link className="text-decoration-none text-white" to="/">Back to Home Page</Link>
                        </button>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 g-4 ">
                        <div className="col">

                            <img id="movie_image" src={`${url}/${movie.image}`} alt={movie.title} className="img-fluid" />

                        </div>
                        <div className="col d-flex flex-column justify-content-center gap-3">
                            
                                <h1>{movie.title}</h1>
                            
                            <div>
                                <p className="d-flex gap-3"><p className="fw-bold">Genre:</p> {movie.genre}</p>
                            </div>
                            <div>

                                <p className="d-flex gap-3"><p className="fw-bold">Abstract:</p> {movie.abstract}</p>
                            </div>
                            <div>
                                <p className="d-flex gap-3"><p className="fw-bold">Release Date:</p> {movie.release_year}</p>
                            </div>
                            <div>
                                <p className="d-flex gap-3"><p className="fw-bold">Director:</p> {movie.director}</p>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt-5">
                        <h2>RECENSIONI:</h2>
                    </div>
                    {movie.reviews?.map((review) => (
                        <MovieReviewMap key={review.id} review={review} />
                    ))}

                </div>
            </div>

        </>
    );
}