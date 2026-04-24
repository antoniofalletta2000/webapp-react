import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import MovieReviewMap from "../components/MovieReviewMap";
import FormReview from "../components/FormReview";
import MovieDetails from "../components/MovieDetails";
import { useGlobalContext } from "../Context/GlobalContext";


export default function SingleMoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const url = "http://localhost:3000"
    const endpoint = `http://localhost:3000/movies/${id}`;
    const [openForm, setOpenForm] = useState(false);
    const {setIsLoading} = useGlobalContext()

    function refreshData(){

        setIsLoading(true)

        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovie(data))
            .finally(()=>{setIsLoading(false)})
    }

    useEffect(refreshData, []);

    if (movie === null) return <p>Loading...</p>;

    function toggleForm() {
        setOpenForm(!openForm);
    }



    return (
        <>
            <div className=" pb-5">
                <div className="container pt-5">
                    <div className="d-flex justify-content-end pb-3">
                        <Link className="text-decoration-none text-warning fw-bold" to="/"><i id="exit" class="bi bi-box-arrow-left"></i></Link>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 g-4 ">
                        <div className="col">

                            <img id="movie_image" src={`${url}/${movie.image}`} alt={movie.title} className="img-fluid" />

                        </div>
                        <div id="movie_details_review" className="col d-flex flex-column justify-content-center gap-3 text-black card">

                            {openForm ? <FormReview id={id} refreshData={refreshData} /> : <MovieDetails movie={movie} />}

                            <div className="d-flex justify-content-center px-5 mt-4">
                                <button onClick={toggleForm} className={`btn border border-0 ${openForm ? "btn-danger" : "btn-warning"} btn_hover`}>
                                    {openForm ? "Close form" : "Add review!"}
                                </button>
                            </div>
                        </div>

                    </div>

                    <div  className="d-flex justify-content-center pt-5 ">
                        <div className="card bg-black px-4">
                            <h2 className="text-warning">RECENSIONI:</h2>
                        </div>
                        
                    </div>
                    {movie.reviews?.map((review) => (
                        <MovieReviewMap key={review.id} review={review} />
                    ))}

                </div>
            </div>

        </>
    );
}