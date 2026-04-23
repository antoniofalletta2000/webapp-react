import { useState } from "react"

export default function AdminForm({ refreshTable }) {

    const initialFormData = {
        title: "",
        director: "",
        genre: "",
        image:""
    }
    const [formData, setFormData] = useState(initialFormData)
    const [submissionStatus, setSubmissionStatus] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);


        fetch(`http://localhost:3000/movies/admin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
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


            <form onSubmit={handleSubmit}>
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
                            <input className="rounded" type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
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