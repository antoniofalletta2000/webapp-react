export default function AdminMap({ movie }) {
    return (
        <>
            <tr>
                <th scope="row">{movie.id}</th>

                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.genre}</td>
                <td>{movie.updated_at}</td>
                <td><button type="button" className="btn border border-0 bg-danger text-white">Delete</button></td>
            </tr>
        </>
    )
}