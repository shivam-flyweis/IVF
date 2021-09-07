import React from 'react'
import './ProductBody.css'
const ProductBody = () => {
  return (
    <>
          <div className="col-md-4 my-3 product">

       <a className="product-body" href="/product">
         
            <div className="card" >
              <img className="card-img-top" style={{ width:"100%", height:"10rem" }} src="/assets/images/image2.jpg" alt="Card image cap" />
              <div className="card-body d-flex flex-column align-items-center">
               <h6 className="product-title">Product Name</h6>
               <div className="rating d-flex">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               </div>
               <p className="price">price <del>discount</del></p>
              </div>
            </div>
       </a>
          </div>

       





    </>
  )
}

export default ProductBody
