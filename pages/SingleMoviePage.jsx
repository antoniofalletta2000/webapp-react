import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import MovieReviewMap from "../components/MovieReviewMap";

export default function SingleMoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const url = "http://localhost:3000"
    const endpoint = `http://localhost:3000/movies/${id}`;
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, []);

    if (movie === null) return <p>Loading...</p>;

    function toggleForm() {
        setOpenForm(!openForm);
    }

    return (
        <>
            <div className=" pb-5">
                <div className="container pt-5">
                    <div className="d-flex justify-content-end pb-3">
                        <button className="btn border border-0 bg-primary">
                            <Link className="text-decoration-none text-white" to="/">Back to Home Page</Link>
                        </button>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 g-4 ">
                        <div className="col">

                            <img id="movie_image" src={`${url}/${movie.image}`} alt={movie.title} className="img-fluid" />

                        </div>
                        <div className="col d-flex flex-column justify-content-center gap-3">

                            {openForm ?
                                <>
                                <form action="" className="d-flex flex-column gap-4">
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <div className="input-group">
                                        <span className="input-group-text">review</span>
                                        <textarea className="form-control" aria-label="With textarea" placeholder="Write what you think about this film...">
                                        </textarea>
                                    </div>

                                    <select className="form-select">
                                        <option selected>Select your vote</option>
                                        <option value="1">⭐</option>
                                        <option value="2">⭐⭐</option>
                                        <option value="3">⭐⭐⭐</option>
                                        <option value="4">⭐⭐⭐⭐</option>
                                        <option value="5">⭐⭐⭐⭐⭐</option>
                                    </select>

                                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                                </form>
                                    
                                </>
                                :
                                <>
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
                                </>
                            }

                            <div className="d-flex justify-content-center px-5 mt-4">
                                <button onClick={toggleForm} className={`btn border border-0 ${openForm ? "btn-danger" : "btn-warning"}`}>
                                    {openForm ? "Close form" : "Add review!"}
                                </button>
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