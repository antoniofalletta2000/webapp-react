export default function AdminMap({ movie }) {
    return (
        <>
            <tr>
                <th scope="row">{movie.id}</th>

                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.updated_at}</td>
            </tr>
        </>
    )
}