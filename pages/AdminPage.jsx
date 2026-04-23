import { useEffect, useState } from "react";
import AdminMap from "../components/AdminMap";
import AdminForm from "../components/AdminForm"

export default function AdminPage() {

    const [movies, setMovies] = useState([]);
    const endpoint = "http://localhost:3000/movies"

    function refreshTable(){
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

          <AdminForm refreshTable={refreshTable}/>
            
        </>



    )
}