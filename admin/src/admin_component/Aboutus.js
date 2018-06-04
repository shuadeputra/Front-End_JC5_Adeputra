import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';

class Aboutus extends Component {

  render() {
    return (
   <div>
    
    {/* Bagian navbaradmin */}
    <Navbaradmin aboutus="active"/>

       <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-desktop"></i> About us</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">UI Element</li>
          <li className="breadcrumb-item">About us</li>
        </ul>
      </div>
     
      <div className="clearix"></div>
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">About us</h3>
            <div className="tile-body">
              <form className="row">
                <div className="form-group col-md-12">
                  <label className="control-label"> How it all began</label>
                  <textarea id="electronic" rows="3" className="form-control">
                      As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
                  </textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-user"> Who we are</label>
                  <textarea id="electronic" rows="3" className="form-control">
                      As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
                  </textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-heart"> We care </label>
                  <textarea id="electronic" rows="3" className="form-control">
                      As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
                  </textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-truck"> Fast delivery</label>
                  <textarea id="electronic" rows="3" className="form-control">
                      As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
                  </textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-shield"> Your security and privacy matters </label>
                  <textarea id="electronic" rows="3" className="form-control">
                      As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
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

export default Aboutus;