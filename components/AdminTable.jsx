import AdminMap from "../components/AdminMap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function AdminTable() {
    const [movies, setMovies] = useState([]);

    const endpoint = "http://localhost:3000/movies"

    function refreshTable() {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovies(data))
    }

    useEffect(refreshTable, [])



    return (
        <>
            <div className="d-flex justify-content-center pt-3">
                <h1 className="text-warning fw-bold">Movies List</h1>
            </div>

            <div className="container">
                <div className="d-flex justify-content-end pb-3">
                    <Link className="text-decoration-none text-warning fw-bold bg-black p-2 rounded" to="/admin"><i id="exit" className="bi bi-box-arrow-left"></i></Link>
                </div>
            </div>


            <table className="table table-dark table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Director</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Updated at</th>
                        <th scope="col">Commands</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <AdminMap key={movie.id} movie={movie} />
                    ))}

                </tbody>
            </table>

        </>
    )
}