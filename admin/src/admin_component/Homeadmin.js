import React, { Component } from 'react';
import Navbaradmin from './Navbaradmin';
import Contenthome from './Contenthome';


class Homeadmin extends Component {

  render() {
    return (
  <div>
      <Navbaradmin Homeadmin="active"/>
      <Contenthome/>

    </div>
    );
  }
}

export default Homeadmin;
