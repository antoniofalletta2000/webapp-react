export default function FormReview() {
    return (
        <>
            <form action="" className="d-flex flex-column gap-4">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                </div>

                <div className="input-group">
                    <span className="input-group-text">review</span>
                    <textarea className="form-control" aria-label="With textarea" placeholder="Write what you think about this film...">
                    </textarea>
                </div>

                <select className="form-select">
                    <option selected>Select your vote</option>
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                </select>

                <button type="submit" className="btn btn-warning mt-3  btn_hover">Submit</button>
            </form>

        </>
    )
}