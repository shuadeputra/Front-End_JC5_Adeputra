import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom'

class Customerlogin extends Component {
  render() {
    return (
    <div>
   
    <Navbar />

  {/* <!-- Hero Section--> */}
  <section className="hero hero-page gray-bg padding-small">
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-9 order-2 order-lg-1">
          <h1>Customer zone</h1>
        </div>
        <div className="col-lg-3 text-right order-1 order-lg-2">
          <ul className="breadcrumb justify-content-lg-end">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Customer zone</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- text page--> */}
  <section className="padding-small">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="block">
            <div className="block-header">
              <h5>Login</h5>
            </div>
            <div className="block-body"> 
              <p className="lead">Already our customer?</p>
              <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <hr/>
              
              <form method="get">
                <div className="form-group">
                  <label for="email" className="form-label">Email</label>
                  <input id="email" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">Password</label>
                  <input id="password" type="password" className="form-control"/>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Log in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="block">
            <div className="block-header">
              <h5>New account</h5>
            </div>
            <div className="block-body"> 
              <p className="lead">Not our registered customer yet?</p>
              <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
              <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
              <hr/>
              <form method="get">
                <div className="form-group">
                  <label for="name" className="form-label">Name</label>
                  <input id="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="email" className="form-label">Email</label>
                  <input id="email" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <label for="password" className="form-label">Password</label>
                  <input id="password" type="password" className="form-control"/>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary"><i className="fas fa-user"></i> Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <Footer/>

    </div>
    );
  }
}

export default Customerlogin;