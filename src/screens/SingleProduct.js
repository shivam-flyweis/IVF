import React,{useState} from 'react'
import './SingleProduct.css'
const SingleProduct = () => {
    const [Quantity, setQuantity] = useState(0)

    const Decrement=()=>{
        if(Quantity>0){
            setQuantity(Quantity-1)
        }
    }

    const Increment=()=>{
        setQuantity(Quantity+1)
    }
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <img className="img" src="/assets/images/image3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3">
                                    <img className="secondary-img" src="/assets/images/image3.jpg" alt="" />
                                </div>
                                <div className="col-3">
                                    <img className="secondary-img" src="/assets/images/image3.jpg" alt="" />
                                </div>
                                <div className="col-3">
                                    <img className="secondary-img" src="/assets/images/image3.jpg" alt="" />
                                </div>
                                <div className="col-3">
                                    <img className="secondary-img" src="/assets/images/image3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                        <h4 className="title">Product Name</h4>
                        <div className="rating d-flex my-3">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="price">$500 <del>200</del></div>
                        <div className="description mt-5">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
                        </div>
                        <div className="quantity  mt-5 d-flex">
                            <label className="quantity-label">Qty:</label>
                            <div className="input-group  quantity-input mb-3 ml-5 mx-4">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary inc-dec-btn" type="button" onClick={Decrement}>-</button>
                                </div>
                                <input type="text" className="form-control text-center" value={Quantity} readOnly placeholder="" aria-label="" aria-describedby="basic-addon1" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary inc-dec-btn" type="button" onClick={Increment}>+</button>
                                </div>
                            </div>
                            <button type="button" className="btn add-cart-btn btn-secondary">Add To Cart</button>
                            <button className="wishlist"><i class="fas fa-heart"></i></button>
                            <button className="share"><i class="fas fa-share-alt"></i></button>
                            </div>
                            <div className="categories d-flex">
                                <label>Categories:</label><span className="ml-3"> medicines , tablets</span>
                            </div>
                            <div className="tags d-flex">
                                <label>Tags:</label><span className="ml-3"> medicines , tablets</span>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
