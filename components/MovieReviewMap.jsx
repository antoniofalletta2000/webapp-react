export default function SingleMovieMap({ review }) {

    function stars({vote}){
        const starsArr=[]
        for(let i=0; i<=5; i++){
            starsArr.push(
                <i key={i} className={
                    i<=vote ? "bi bi-star-fill text-warning" : "bi bi-star text-warning"
                }></i>
            )

        }
        return starsArr;
    }

    return (
        <div className="border rounded p-3 mt-3 d-flex flex-column gap-4 bg-black" >
            <div className="bg-warning">
                <h5 className="d-flex justify-content-center text-black">{review.name}</h5>
            </div>
            <div className="text-white">
                <p className="d-flex gap-3"><p className="fw-bold">Commento:</p>{review.text}</p>
                <p className="d-flex gap-3"><p className="fw-bold">Voto:</p>{stars({ vote: review.vote })}</p>
            </div>
        </div>
    )
}