export default function SingleMovieMap({ review }) {

    return (
        <div className="border rounded p-3 mt-3 d-flex flex-column gap-4 bg-black" >
            <div className="bg-light">
                <h5 className="d-flex justify-content-center">{review.name}</h5>
            </div>
            <div className="text-white">
                <p className="d-flex gap-3"><p className="fw-bold">Commento:</p>{review.text}</p>
                <p className="d-flex gap-3"><p className="fw-bold">Voto:</p>{review.vote}</p>
            </div>
        </div>
    )
}