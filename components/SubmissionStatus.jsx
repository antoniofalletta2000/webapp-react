export default function SubmissionStatus({submissionStatus}){
    return(
        <>
            {submissionStatus === "success" && 
            <div className="alert alert-success" role="alert">
                Review added successfully!👌🍿
            </div>}    
            {submissionStatus === "error" && 
            <div className="alert alert-danger" role="alert">
                Error adding review. Please complete all fields and try again.👎🏻🍿
            </div>}  
        </>
    )
}