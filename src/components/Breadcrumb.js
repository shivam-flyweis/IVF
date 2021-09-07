import React from 'react'
import './Breadcrumb.css'
const Breadcrumb = () => {
    return (
        <>
            <div className="container-fluid bg-light ">
                <div className="row">
                    <div className="col-12 p-0 ">
                    <nav aria-label="breadcrumb" >
  <ol className="breadcrumb d-flex justify-content-center align-items-center">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Library</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
