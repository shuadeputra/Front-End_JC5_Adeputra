import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route } from 'react-router-dom'

import Loginadmin from './admin_component/Loginadmin';
import Homeadmin from './admin_component/Homeadmin'; 
import Productall from './admin_component/Productall'; 
import Addproduct from './admin_component/Addproduct'; 
import Editproduct from './admin_component/Editproduct'; 
import Blogall from './admin_component/Blogall'; 
import Blogadd from './admin_component/Blogadd'; 
import Blogedit from './admin_component/Blogedit'; 
import Contact from './admin_component/Contact'; 
import Aboutus from './admin_component/Aboutus'; 
import Orders from './admin_component/Orders'; 
import Pagemail from './admin_component/Pagemail'; 
import Pageuser from './admin_component/Pageuser'; 


class App extends Component {

  render() {

    return (
      <div> 
      <Route exact path="/" component={Loginadmin}/>  
      <Route path="/homeadmin" component={Homeadmin}/> 
      <Route path="/productall" component={Productall}/> 
      <Route path="/addproduct" component={Addproduct}/> 
      <Route path="/editproduct" component={Editproduct}/> 
      <Route path="/blogall" component={Blogall}/> 
      <Route path="/blogadd" component={Blogadd}/> 
      <Route path="/blogedit" component={Blogedit}/> 
      <Route path="/contact" component={Contact}/> 
      <Route path="/aboutus" component={Aboutus}/> 
      <Route path="/orders" component={Orders}/> 
      <Route path="/pagemail" component={Pagemail}/> 
      <Route path="/pageuser" component={Pageuser}/> 

     </div>
    );
  }
}

export default App;
