import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';

class Orders extends Component {

  render() {
    return (
   <div>
    
    {/* Bagian navbaradmin */}
    <Navbaradmin orders="active"/>

     <main className="app-content">
      <div className="app-title responsive-table">
        <div>
          <h1><i className="fa fa-table"></i> Orders</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Orders</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
            <span className="badge badge-info">Being prepared</span>
            <span className="badge badge-warning">Action needed</span>
            <span className="badge badge-success">Received</span>
            <span className="badge badge-danger">Cancelled</span>
          <div className="tile">
            <div className="tile-body">
                <table className="table table-hover table-responsive-md" id="sampleTable">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Customer id</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th># 1735</th>
                        <th>12345</th>
                        <td>22/6/2017</td>
                        <td>$150.00</td>
                        <td><span className="badge badge-info">Being prepared</span></td>
                        <td>
                          <a className="btn btn-info btn-sm fa fa-archive"></a> &nbsp;
                          <a className="btn btn-warning btn-sm fa fa-road"></a> &nbsp;
                          <a className="btn btn-success btn-sm fa fa-hand-grab-o"></a> &nbsp;
                          <a className="btn btn-danger btn-sm fa fa-ban"></a> &nbsp;
                          <a href="customer-order.html" className="btn btn-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <th># 1734</th>
                        <th>12235</th>
                        <td>7/5/2017</td>
                        <td>$150.00</td>
                        <td><span className="badge badge-warning">Action needed</span></td>
                        <td>
                          <a className="btn btn-info btn-sm fa fa-archive"></a> &nbsp;
                          <a className="btn btn-warning btn-sm fa fa-road"></a> &nbsp;
                          <a className="btn btn-success btn-sm fa fa-hand-grab-o"></a> &nbsp;
                          <a className="btn btn-danger btn-sm fa fa-ban"></a> &nbsp;
                          <a href="customer-order.html" className="btn btn-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <th># 1730</th>
                        <th>129125</th>
                        <td>30/9/2016</td>
                        <td>$150.00</td>
                        <td><span className="badge badge-success">Received</span></td>
                        <td>
                          <a className="btn btn-info btn-sm fa fa-archive"></a> &nbsp;
                          <a className="btn btn-warning btn-sm fa fa-road"></a> &nbsp;
                          <a className="btn btn-success btn-sm fa fa-hand-grab-o"></a> &nbsp;
                          <a className="btn btn-danger btn-sm fa fa-ban"></a> &nbsp;
                          <a href="customer-order.html" className="btn btn-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <th># 1705</th>
                        <th>23985</th>
                        <td>22/6/2016</td>
                        <td>$150.00</td>
                        <td><span className="badge badge-danger">Cancelled</span></td>
                        <td>
                          <a className="btn btn-info btn-sm fa fa-archive"></a> &nbsp;
                          <a className="btn btn-warning btn-sm fa fa-road"></a> &nbsp;
                          <a className="btn btn-success btn-sm fa fa-hand-grab-o"></a> &nbsp;
                          <a className="btn btn-danger btn-sm fa fa-ban"></a> &nbsp;
                          <a href="customer-order.html" className="btn btn-primary btn-sm">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>
        </div>
      </div>
    </main>

    </div>
    );
  }
}

export default Orders;