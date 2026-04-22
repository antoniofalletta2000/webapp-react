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
                    <tr>
                        <th scope="row">1</th>
                        {movies.find(movie => movie.id === 1) &&
                            <td>{movies.find(movie => movie.id === 1).title}</td>}
                        {movies.find(movie => movie.id === 1) &&
                            <td>{movies.find(movie => movie.id === 1).genre}</td>}
                        {movies.find(movie => movie.id === 1) &&
                            <td>{movies.find(movie => movie.id === 1).updated_at}</td>}
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        {movies.find(movie => movie.id === 2) &&
                            <td>{movies.find(movie => movie.id === 2).title}</td>}
                        {movies.find(movie => movie.id === 2) &&
                            <td>{movies.find(movie => movie.id === 2).genre}</td>}
                        {movies.find(movie => movie.id === 2) &&
                            <td>{movies.find(movie => movie.id === 2).updated_at}</td>}
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        {movies.find(movie => movie.id === 3) &&
                            <td>{movies.find(movie => movie.id === 3).title}</td>}
                        {movies.find(movie => movie.id === 3) &&
                            <td>{movies.find(movie => movie.id === 3).genre}</td>}
                        {movies.find(movie => movie.id === 3) &&
                            <td>{movies.find(movie => movie.id === 3).updated_at}</td>}
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        {movies.find(movie => movie.id === 4) &&
                            <td>{movies.find(movie => movie.id === 4).title}</td>}
                        {movies.find(movie => movie.id === 4) &&
                            <td>{movies.find(movie => movie.id === 4).genre}</td>}
                        {movies.find(movie => movie.id === 4) &&
                            <td>{movies.find(movie => movie.id === 4).updated_at}</td>}
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        {movies.find(movie => movie.id === 5) &&
                            <td>{movies.find(movie => movie.id === 5).title}</td>}
                        {movies.find(movie => movie.id === 5) &&
                            <td>{movies.find(movie => movie.id === 5).genre}</td>}
                        {movies.find(movie => movie.id === 5) &&
                            <td>{movies.find(movie => movie.id === 5).updated_at}</td>}
                    </tr>
                </tbody>
            </table>
        </>



    )
}