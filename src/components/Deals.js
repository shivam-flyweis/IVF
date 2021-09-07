import React from 'react'
import './Deals.css'
import ProductBody from './ProductBody'
const Deals = () => {
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center" >
                  <h3 className="primary-heading">Daily Deals</h3>
                    </div>
            </div>
            <div className="row mt-2"  >
                <div className="col-12">
                <ul className="nav justify-content-center mt-5 ">
        <li className="nav-item active">
          <a className="nav-link deal mx-5 "  data-toggle="tab" href="#menu1">New Arrivals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link deal mx-5 "   data-toggle="tab" href="#menu2">Best Sellers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link deal mx-5 "   data-toggle="tab" href="#menu3">Best Items</a>
        </li>
        
       
      </ul> 
      
  <div className="tab-content mt-5">
    <div id="menu1" className="tab-pane  active">
    <div className=" container-fluid">
        <div className="row">
     <ProductBody/>
     <ProductBody/>
     <ProductBody/>
     <ProductBody/>
     <ProductBody/>
     <ProductBody/>
     <ProductBody/>
     <ProductBody/>
    </div>
    </div>
    </div>
    <div id="menu2" className="tab-pane ">
    <div className=" container-fluid">
        <div className="row">
    <ProductBody/>
     <ProductBody/>
 
    </div>
    </div>
    </div>
    <div id="menu3" className="tab-pane ">
    <div className="  container-fluid justify-content-around">
        <div className="row d-flex ">
    <ProductBody/>
     <ProductBody/>
     <ProductBody/>
     <ProductBody/>
   
    </div>
    </div>
    </div>
  </div>
                </div>
            </div>
                </div>
        </>
    )
}

export default Deals
