import {useState} from "react"

export default function FormReview({id, refreshData}) {
    const initialFormData ={
        name:"",
        vote: 5,
        text:""
    }
    const [formData, setFormData] = useState(initialFormData)
    const [submissionStatus, setSubmissionStatus] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)

        fetch(`http://localhost:3000/movies/${id}/review`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })        
        .then(res => res.json())
        .then(data => {
            if(data.message){
                setSubmissionStatus("success")
                refreshData()
            }

            if(data.error===true){
                setSubmissionStatus("error")
            }
        })

    }

    return (
        <>
            {submissionStatus === "success" && 
            <div className="alert alert-success" role="alert">
                Review added successfully!👌🍿
            </div>}    
            {submissionStatus === "error" && 
            <div className="alert alert-danger" role="alert">
                Error adding review. Please complete all fields and try again.👎🏻🍿
            </div>}    
            <form action="" className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>

                <div className="input-group">
                    <span className="input-group-text">review</span>
                    <textarea className="form-control" aria-label="With textarea" placeholder="Write what you think about this film..." value={formData.text} onChange={(e) => setFormData({...formData, text: e.target.value})}>
                    </textarea>
                </div>

                <select className="form-select" value={formData.vote} onChange={(e) => setFormData({...formData, vote: parseInt(e.target.value)})}>
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