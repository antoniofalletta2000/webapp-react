export default function MovieDetails({ movie }) {
    
    function stars({ vote }) {
        const starsArr = []
        for (let i = 0; i <= 5; i++) {
            starsArr.push(
                <i key={i} className={
                    i <= vote ? "bi bi-star-fill text-warning" : "bi bi-star text-warning"
                }></i>
            )

        }
        return starsArr;
    }
    return (
        <>
            <h1>{movie.title}</h1>

            <div>
                <p className="d-flex gap-3"><span className="fw-bold">Genre:</span> {movie.genre}</p>
            </div>
            <div>

                <p className="d-flex gap-3"><span className="fw-bold">Abstract:</span> {movie.abstract}</p>
            </div>
            <div>
                <p className="d-flex gap-3"><span className="fw-bold">Release Date:</span> {movie.release_year}</p>
            </div>
            <div>
                <p className="d-flex gap-3"><span className="fw-bold">Director:</span> {movie.director}</p>
            </div>
            <div>
                <p className="d-flex gap-3"><span className="fw-bold">Vote:</span> {stars({ vote: movie.average_vote })}</p>
            </div>
        </>
    )
}