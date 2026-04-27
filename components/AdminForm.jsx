import { useState } from "react"
import {Link} from "react-router-dom"

export default function AdminForm({ refreshTable }) {

    const initialFormData = {
        title: "",
        director: "",
        genre: "",
        image: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    const [submissionStatus, setSubmissionStatus] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);

        const formDataObject = new FormData();
        formDataObject.append("title", formData.title)
        formDataObject.append("director", formData.director);
        formDataObject.append("genre", formData.genre);
        formDataObject.append("image", formData.image);

        fetch(`http://localhost:3000/movies/admin`, {
            method: "POST",

            body: formDataObject
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setSubmissionStatus("success")
                    refreshTable()
                    setTimeout(() => {
                        //setFormData(initialFormData)
                        setSubmissionStatus(null)
                    }, 2000)
                }

                if (data.error === true) {
                    setSubmissionStatus("error")
                }
            })

    }


    return (
        <>
            <div className="container">
                {submissionStatus === "success" &&
                    <div className="alert alert-success" role="alert">
                        Movie added successfully!
                    </div>}
                {submissionStatus === "error" &&
                    <div className="alert alert-danger" role="alert">
                        Error adding movie. Please complete all fields and try again.
                    </div>}
            </div>

            <div className="container mt-3">
                <div className="d-flex justify-content-end pb-3">
                    <Link className="text-decoration-none text-warning fw-bold bg-black p-2 rounded" to="/admin"><i id="exit" className="bi bi-box-arrow-left"></i></Link>
                </div>
            </div>


            <form onSubmit={handleSubmit} className="pb-4" encType="multipart/form-data">
                <div className="container card bg-warning">

                    <div className="d-flex p-3 justify-content-around">
                        <div className="d-flex gap-2">
                            <h3>Title:</h3>
                            <input className="rounded" type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                        </div>
                        <div className="d-flex gap-2">
                            <h3>Director:</h3>
                            <input className="rounded" type="text" value={formData.director} onChange={(e) => setFormData({ ...formData, director: e.target.value })} />
                        </div>
                        <div className="d-flex gap-2">
                            <h3>Genre:</h3>
                            <input className="rounded" type="text" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} />
                        </div>
                        <div className="d-flex gap-2">
                            <h3>Image:</h3>
                            <input className="rounded" type="file" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center pt-3">
                    <button type="submit" className="btn btn-dark btn_hover text-warning">Add Movie</button>
                </div>
            </form>
        </>
    )
}