import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Similaritems from './Similaritems';
import '../App.css';
import {Link} from 'react-router-dom'

class Detail extends Component {
  render() {
    return (
    <div>
   
    <Navbar />

   {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>YuXiangYan 2018 CNY Abalone Gift Box</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/category">Shop</Link></li>
              <li className="breadcrumb-item active">YuXiangYan 2018 CNY Abalone Gift Box</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
{/* <!-- End bagian atas --> */}

    <section className="product-details">
      <div className="container">
        <div className="row">
          <div className="product-images col-lg-6">
            <div className="ribbon-info text-uppercase">Fresh</div>
            <div className="ribbon-primary text-uppercase">Sale</div>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-80" style={{background:"#f5f5f5"}} src={"img/product/viewproduk.png"} alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-80" style={{background:"#f5f5f5"}} src={"img/product/viewproduk1.2.png"} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-80" style={{background:"#f5f5f5"}} src={"img/product/viewproduk1.3.png"} alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

          </div>
          <div className="details col-lg-6">
            <div className="d-flex align-items-center justify-content-between flex-column flex-sm-row">
              <ul className="price list-inline no-margin">
                  <li className="list-inline-item current">$68.00</li>
                  <li className="list-inline-item original">$88.00</li>
              </ul>
              <div className="review d-flex align-items-center">
                <ul className="rate list-inline">
                  <li className="list-inline-item"><i className="fas fa-star text-primary"></i></li>
                  <li className="list-inline-item"><i className="fas fa-star text-primary"></i></li>
                  <li className="list-inline-item"><i className="fas fa-star text-primary"></i></li>
                  <li className="list-inline-item"><i className="fas fa-star text-primary"></i></li>
                  <li className="list-inline-item"><i className="fas fa-star text-primary"></i></li>
                </ul><span className="text-muted">No reviews</span>
              </div>
            </div>
            <p> YuXiangYan Happiness Hamper Best Gift for Parents / Girl Friend / / Colleagues
                What’s inside the hamper?,1 can Bao Jin Tian Abalone 10H + 2 cans Razor Clams
                </p>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <div className="quantity d-flex align-items-center">
                <div className="dec-btn">-</div>
                <input type="text" value="1" className="quantity-no"/>
                <div className="inc-btn">+</div>
              </div>
            </div>
            <ul className="CTAs list-inline">
                <li className="list-inline-item"><a href="#" className="btn btn-template wide"> 
                  <i className="fas fa-shopping-cart"></i>Add to Cart</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="product-description no-padding">
      
      
{/* <!-- Penjelasan Dari description  --> */}
    <div className="container">
        <ul role="tablist" className="nav nav-tabs">
          <li className="nav-item"><a data-toggle="tab" href="#description" role="tab" className="nav-link active">Description</a></li>
          <li className="nav-item"><a data-toggle="tab" href="#additional-information" role="tab" className="nav-link">Additional Information</a></li>
        </ul>
        <div className="tab-content">
          <div id="description" role="tabpanel" className="tab-pane active">
              <p> YuXiangYan Happiness Hamper Best Gift for Parents / Girl Friend / / Colleagues
                  What’s inside the hamper?,1 can Bao Jin Tian Abalone 10H + 2 cans Razor Clams
                  </p>
          </div>

    {/* <!-- Penjelasan Materialnya --> */}
          <div id="additional-information" role="tabpanel" className="tab-pane">
            <ul className="list-unstyled additional-information">
              <li className="d-flex justify-content-between"><strong>Material:</strong><span>Cotton</span></li>
              <li className="d-flex justify-content-between"><strong>Styles:</strong><span>Casual</span></li>
              <li className="d-flex justify-content-between"><strong>Properties:</strong><span>Short Sleeve</span></li>
              <li className="d-flex justify-content-between"><strong>Brand:</strong><span>Calvin Klein</span></li>
            </ul>
          </div>
        </div>
      </div>

{/* <!-- Share Icon --> */}
      <div className="container-fluid">
        <div className="share-product gray-bg d-flex align-items-center justify-content-center flex-column flex-md-row"><strong className="text-uppercase">Share this on</strong>
          <ul className="list-inline text-center">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter">
              <i className="fab fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook">
              <i className="fab fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram">
              <i className="fab fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest">
              <i className="fab fa-pinterest"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo">
              <i className="fab fa-vimeo"></i></a></li>
          </ul>
        </div>
      </div>
    </section>

  <Similaritems/>

  <Footer/>

    </div>
    );
  }
}

export default Detail;