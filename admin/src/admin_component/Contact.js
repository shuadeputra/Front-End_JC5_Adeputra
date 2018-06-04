import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';

class Contact extends Component {

  render() {
    return (
   <div>
    
    {/* Bagian navbaradmin */}
    <Navbaradmin contact="active"/>

       <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-phone"></i> Contact</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Homet</li>
          <li className="breadcrumb-item active">Contact</li>
        </ul>
      </div>
     
      <div className="clearix"></div>
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Contact</h3>
            <div className="tile-body">
              <form className="row">
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-map"> Address</label>
                  <input className="form-control" type="text" value="13/25 New Avenue
                  New Heaven, 45Y 73J
                  England, Great Britain"/>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-address-book"> Call center</label>
                  <input className="form-control" type="text" value="This number is toll free if calling from Great Britain otherwise we advise you to use the electronic form of communication.
                  +33 555 444 333"/>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-envelope"> Electronic support</label>
                  <textarea id="electronic" rows="3" className="form-control">
                    Please feel free to write an email to us or to use our electronic ticketing system.
                    info@fakeemail.com
                    Ticketio - our ticketing support platform
                </textarea>
                </div>

              <div className="form-group col-md-12">
                <label for="description">description</label>
                <textarea id="description" rows="5" className="form-control"> 
                    Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.
                    
                    Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh.
                    </textarea>
                </div>

                <div className="form-group col-md-4 align-self-end">
                  <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-save"></i>Save change</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </main>
   
    

    </div>
    );
  }
}

export default Contact;