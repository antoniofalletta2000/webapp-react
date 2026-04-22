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
                <p className="d-flex gap-3"><p className="fw-bold">Genre:</p> {movie.genre}</p>
            </div>
            <div>

                <p className="d-flex gap-3"><p className="fw-bold">Abstract:</p> {movie.abstract}</p>
            </div>
            <div>
                <p className="d-flex gap-3"><p className="fw-bold">Release Date:</p> {movie.release_year}</p>
            </div>
            <div>
                <p className="d-flex gap-3"><p className="fw-bold">Director:</p> {movie.director}</p>
            </div>
            <div>
                <p className="d-flex gap-3"><p className="fw-bold">Vote:</p> {stars({ vote: movie.average_vote })}</p>
            </div>
        </>
    )
}