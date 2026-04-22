import { Link } from "react-router-dom";
import { useState } from "react";


export default function MoviesMap({ movie }) {

    const url = "http://localhost:3000"

    const [details, setDetails] = useState(false);

    function toggleDetails() {
        setDetails(!details);
    }

    return (
        <div className="col p-3">
            <div id="movies_card" onClick={toggleDetails} className="card text-white bg-black">

                {details ?
                    <div className="d-flex justify-content-center ">
                        <i id="icon_eye" className="bi bi-eye-slash text-white"></i>
                    </div> :
                    <div className="d-flex justify-content-center ">
                        <i id="icon_eye" className="bi bi-eye text-white"></i>
                    </div>}

                <h4 className="card-title d-flex justify-content-center pt-5">{movie.title}</h4>
                <div className="card-body">

                    {details ?
                        <>
                            <p className="card-text pt-2">
                                <p className="fw-bold">Abstract: </p>
                                {movie.abstract}
                            </p>
                            <p className="d-flex justify-content-end gap-2"><p className="fw-bold">Release Date:</p> {movie.release_year}</p>
                            <div className="d-flex justify-content-end">
                                <button className="btn border border-0 bg-primary">
                                    <Link className="text-decoration-none text-white" to={`/movie/${movie.id}`}>View Movie</Link>
                                </button>
                            </div>
                        </>

                        : <img id="movies_image" src={`${url}/${movie.image}`} alt={movie.title} className="img-fluid" />

                    }

                </div>
            </div>
        </div>
    )
}