import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';

class Editproduct extends Component {

  render() {
    return (
   <div>

     {/* Bagian navbar admin */}
    <Navbaradmin product="active"/>


    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-product-hunt"></i> Edit Product</h1><br/>
          <Link class="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link>
        </div>
        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item">Home</li>
          <li class="breadcrumb-item"><Link to="/productall">Product</Link></li>
          <li class="breadcrumb-item active"> Edit Product </li>
        </ul>
      </div>
     
      <div class="clearix"></div>
        <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-title">Add Product</h3>
            <div class="tile-body">
              <form class="row">
                <div class="form-group col-md-10">
                  <label class="control-label">Name Product</label>
                  <input class="form-control" type="text" placeholder="name product" value="amat"/>
                </div>
                <div class="form-group col-md-2 col-6">
                  <label class="control-label">Product Price</label>
                  <input class="form-control" type="number" placeholder="price" value="1000"/>
                </div>
                <div class="form-group col-md-2 col-6">
                  <label for="gender">Quantity </label>
                  <input class="form-control" type="number" placeholder="Quantity" value="20"/>
                  </div>

                <div class="form-group col-md-2 col-6">
                  <label for="gender">Unit of measure</label>
                  <select id="gender" class="form-control">
                  <option>Box</option>
                  <option>Pcs</option>
                  </select>
              </div>
                <div class="form-group col-md-2 col-6">
                  <label for="gender">Categori </label>
                  <select id="gender" class="form-control">
                  <option>New</option>
                  <option>Sale</option>
                  <option>Fresh</option>
                  </select>
              </div>
                <div class="form-group col-md-2 col-6">
                  <label for="gender">Condition </label>
                  <select id="gender" class="form-control">
                  <option>Fresh</option>
                  <option>Sold</option>
                  </select>
              </div>
              
              <div class="form-group col-md-12">
              <label for="file">Picture Product</label>
              <input type="file" id="file" class="form-control-file"/>
              <small id="fileHelp" class="form-text text-muted">Max 12mb size</small>
              </div>

              <div class="form-group col-md-12">
                <label for="message">description</label>
                <textarea id="message" rows="3" class="form-control">Begini dan begitu</textarea>
            </div>

                <div class="form-group col-md-4 align-self-end">
                  <button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-save"></i>Change</button>
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

export default Editproduct;