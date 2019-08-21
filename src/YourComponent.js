import React, { Component } from 'react';
import MapMex from './component/map'

import './yourComponent.css'

/*
* Use this component as a launching-pad to build your functionality.
*
*/
class YourComponent extends Component {
  
  render() {
    
    return (

      <div style={divStyle}>
        <div className="row">
       <div className="mapa col-12 col-xs-12">
         <MapMex/>
</div>
<div className="row">
       </div>
       <div className=" favor col-12 col-xs-12">
   
       </div>
       </div>
      </div>
    );
  }
}

var divStyle = {
 
  
 
};

export default YourComponent;
