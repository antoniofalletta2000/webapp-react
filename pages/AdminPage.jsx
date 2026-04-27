import { useEffect, useState } from "react";


export default function AdminPage() {

    
    

    return (
        <>
            <div className="d-flex justify-content-center pt-3">
                <h1 className="text-warning fw-bold">Dashboard</h1>
            </div>

            <div className="container">
                <div className="d-flex justify-content-around">
                   
                        <div>
                            <a href="/admin/table">
                                <button className="btn_hover btn border border-0 p-5 bg-light">Table</button>
                            </a>
                        </div>
                        <div>
                            <a href="/admin/form">
                                <button className="btn_hover btn border border-0 p-5 bg-light">Form</button>
                            </a>
                        </div>
    
                </div>

            </div>



        </>



    )
}