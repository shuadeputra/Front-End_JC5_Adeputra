import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contactform from './Contactform';
import Categorysidebar from './Categorysidebar';
import '../App.css';
import {Link} from 'react-router-dom'

class Contact extends Component {
  render() {
    return (
    <div>
   
    <Navbar />

      {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Shop</h1><p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Shop</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <main>
      <div className="container">
        <div className="row">

<Categorysidebar/>

   {/* <!-- Grid --> */}
          <div className="products-grid col-xl-9 col-lg-8 sidebar-left">
            <header className="d-flex justify-content-between align-items-start">
            <span className="visible-items">Showing <strong>1-15 </strong>of <strong>158 </strong>results</span>
              <select id="sorting" className="bs-select">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="lowest-price">Low Price</option>
                <option value="heigh-price">High Price</option>
              </select>
            </header>



      {/* <!-- item--> */}
            <div className="row">
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <div className="ribbon ribbon-primary text-uppercase">Sale</div>
                    <img src={"img/product/bottle1.1.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Bottled B'nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Flower Series B'Nest (6*75ml)</h3></a><span className="price text-muted">$52.00</span></div>
                </div>
                
       {/* <!-- Product ke dua --> */}
              </div>
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/bottle2.1.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Bottled B'nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Rock Sugar B'Nest (6*75ml)</h3></a><span className="price text-muted">$50.00</span></div>
                </div>
              </div>
          
          {/* <!-- Product ke tiga --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <div className="ribbon ribbon-success text-uppercase">New</div>
                    <img src={"img/product/bottle3.1.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Bottled B'nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Ginseng B'Nest (6*75ml)</h3></a><span className="price text-muted">$52.00</span></div>
                </div>
              </div>
          
          {/* <!-- Product ke empat --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/bottle4.1.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Bottled B'nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Rock Sugar B'Nest (4*150ml)</h3></a><span className="price text-muted">$72.00</span></div>
                </div>
              </div>
        
        {/* <!-- Product ke lima --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <div className="ribbon ribbon-info text-uppercase">Fresh</div>
                    <img src={"img/product/bottle5.1.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Bottled B'nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Ginseng Birdnest (170ml)</h3></a><span className="price text-muted">$23.00</span></div>
                </div>
              </div>

        {/* <!-- Product ke enam --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/bottle6.1.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Bottled B'nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Rock Sugar Birdnest (170ml)</h3></a><span className="price text-muted">$21.00</span></div>
                </div>
              </div>

        {/* <!-- Product ke tujuh  --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <div className="ribbon ribbon-danger text-uppercase">Sold</div>
                    <img src={"img/product/birdnest1.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Dried Bird's Nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried Blood Red</h3></a><span className="price text-muted">$549.97</span></div>
                </div>
              </div>

          {/* <!-- Product ke tujuh --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/birdnest2.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Dried Bird's Nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried Golden Orange</h3></a><span className="price text-muted">$499.97</span></div>
                </div>
              </div>

          {/* <!-- Product ke delapan --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <div className="ribbon ribbon-info text-uppercase">Fresh</div>
                    <img src={"img/product/birdnest3.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Dried Bird's Nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried White</h3></a><span className="price text-muted">$97.00</span></div>
                </div>
              </div>

            {/* <!-- Product ke sembilan --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <img src={"img/product/birdnest4.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Dried Bird's Nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried Triangle</h3></a><span className="price text-muted">$188.00</span></div>
                </div>
              </div>

          {/* <!-- Product ke sebelas --> */}
              <div className="item col-xl-4 col-md-6">
                <div className="product is-gray">
                  <div className="image d-flex align-items-center justify-content-center">
                    <div className="ribbon ribbon-danger text-uppercase">Sold</div>
                    <img src={"img/product/birdnest5.png"} alt="product" className="img-fluid"/>
                    <div className="hover-overlay d-flex align-items-center justify-content-center">
                      <div className="CTA d-flex align-items-center justify-content-center">
                      <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>
                        <Link to="detail" className="visit-product active"><i className="icon-search"></i>View</Link>
                        </div>
                    </div>
                  </div>
                  <div className="title"><small className="text-muted">Dried Bird's Nest</small><a href="detail.html">
                      <h3 className="h6 text-uppercase no-margin-bottom">Dried Yantiao</h3></a><span className="price text-muted">$138.00</span></div>
                </div>
              </div>
              <div className="item col-xl-4 col-md-6">
                  <div className="product is-gray">
                    <div className="image d-flex align-items-center justify-content-center">
                      <div className="ribbon ribbon-danger text-uppercase">Sold</div>
                      <img src={"img/product/birdnest5.png"} alt="product" className="img-fluid"/>
                      <div className="hover-overlay d-flex align-items-center justify-content-center">
                        <div className="CTA d-flex align-items-center justify-content-center"><a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a><a href="detail.html" className="visit-product active"><i className="icon-search"></i>View</a></div>
                      </div>
                    </div>
                    <div className="title"><small className="text-muted">Dried Bird's Nest</small><a href="detail.html">
                        <h3 className="h6 text-uppercase no-margin-bottom">Dried Yantiao</h3></a><span className="price text-muted">$138.00</span></div>
                  </div>
                </div>
            </div>
            <nav aria-label="page navigation example" className="d-flex justify-content-center">
              <ul className="pagination pagination-custom">
                <li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span aria-hidden="true">Prev</span><span className="sr-only">Previous</span></a></li>
                <li className="page-item"><a href="#" className="page-link active">1</a></li>
                <li className="page-item"><a href="#" className="page-link">2</a></li>
                <li className="page-item"><a href="#" className="page-link">3</a></li>
                <li className="page-item"><a href="#" className="page-link">4</a></li>
                <li className="page-item"><a href="#" className="page-link">5 </a></li>
                <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span aria-hidden="true">Next</span><span className="sr-only">Next     </span></a></li>
              </ul>
            </nav>
          </div>

   {/* <!-- / Grid End--> */}
        </div>
      </div>
    </main>

  <Footer/>

    </div>
    );
  }
}

export default Contact;