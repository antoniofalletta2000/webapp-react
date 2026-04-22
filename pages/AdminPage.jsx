import { useEffect, useState } from "react";
import AdminMap from "../components/AdminMap";

export default function AdminPage() {

    const [movies, setMovies] = useState([]);
    const endpoint = "http://localhost:3000/movies"

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])


    return (
        <>
            <div className="d-flex justify-content-center pt-3">
                <h1>Movies List</h1>
            </div>
            <table className="table table-dark table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Updated at</th>
                        <th scope="col">Commands</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <AdminMap movie={movie}/>
                    ))}

                </tbody>
            </table>
        </>



    )
}