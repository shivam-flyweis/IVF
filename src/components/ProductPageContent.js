import React from 'react'
import './ProductPageContent.css'
import ProductBody from './ProductBody'
const ProductContent = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3 ml-3">
                        <div class="input-group">
                            <div class="form-outline">
                                <input type="search" placeholder="Search" id="form1" class="form-control search-input" />
                            </div>
                            <button type="button" class="btn btn-light">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        <label className="my-3 label">Categories</label>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Category
        </label>
      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-12">
                          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <span className="ml-5">Showing 10 of 100 products</span>
                          </div>
                        </div>
                        <div className="row mb-5">
                       
                             <ProductBody/>
                             <ProductBody/>
                             <ProductBody/>
                             <ProductBody/>
                             <ProductBody/>
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

                </div>
            </div>
        </>
    )
}

export default ProductContent
