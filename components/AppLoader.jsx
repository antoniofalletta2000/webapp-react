import { FiLoader } from "react-icons/fi";


export default function AppLoader(){

    return(
        <div className="container mt-5">
             <div className="d-flex justify-content-center">
                 <FiLoader className="loading-icon" />
             </div>
        </div>
    )
}