import React, { Component } from 'react';
import MapMex from './component/map'

/*
* Use this component as a launching-pad to build your functionality.
*
*/
class YourComponent extends Component {
  
  render() {
    
    return (
      <div style={divStyle}>
       <div className="mapa">
         <MapMex/>

       </div>
      </div>
    );
  }
}

var divStyle = {
 
  
 
};

export default YourComponent;
