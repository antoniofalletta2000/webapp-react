import { useEffect, useState } from "react";

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
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr>
                            <th scope="row">{movie.id}</th>

                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.updated_at}</td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </>



    )
}