import React from 'react'

const Services = () => {
    return (
        <>
            <div className="container mt-5 ">
                    <div className="row mt-5">
                        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="icon h-50 ">
                   
                        <i style={{fontSize:"3rem" ,color :"orange"}} class="fas fa-hand-holding-usd"></i>
                        </div>
                        <div className="details mt-3">
                            <div className="title">Best Price</div>
                           
                        </div>
                        </div>
                        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="icon  h-50 ">
                        <i style={{fontSize:"3rem" ,color :"skyblue"}} class="fas fa-hand-holding-medical"></i>
                        </div>
                        <div  className="details mt-3">
                            <div className="title">Best Service</div>
                            
                        </div>
                        </div>
                        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="icon  h-50 ">
                        <i style={{fontSize:"3rem" ,color :"green"}} class="fas fa-hand-holding-heart"></i>
                        </div>
                        <div  className="details mt-3">
                            <div className="title">Best Products</div>
                           
                        </div>
                        </div>
                      
                    </div>
            </div>

        </>
    )
}

export default Services
