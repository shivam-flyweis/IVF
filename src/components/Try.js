import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
          
                  <nav className="navbar sticky-top  navbar-expand-lg navbar-light bg-light p-3">
        <div className="container-fluid">
          <a className="navbar-brand lead" href="#">Navbar</a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link navlink active " aria-current="page" href="/">Home</a>
              </li>
              
              <li class="nav-item dropdown mx-3">
        <a class="nav-link navlink dropdown-toggle" href="/collection" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Education</a>
          <a class="dropdown-item" href="#">IVF</a>
          <a class="dropdown-item" href="#">E-commerce</a>
        </div>
      </li>
              <li className="nav-item mx-3">
                <a className="nav-link navlink active" aria-current="page" href="/products">Products</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link navlink active" aria-current="page" href="/contact">Contact us</a>
              </li>
            </ul>
           
        <div className="icons d-flex  ">
        <a className="mx-3 icon" style={{color:"#868986"}} href="#"><i class="fas fa-cart-plus"></i></a>
        <a className="mx-3 icon" style={{color:"#868986"}} href="#"><i class="fas fa-cart-plus"></i></a>
        <a className="mx-3 icon" style={{color:"#868986"}} href="#"><i class="fas fa-cart-plus"></i></a>
        </div>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar
