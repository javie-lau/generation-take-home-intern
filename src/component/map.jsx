import React, { Component } from 'react';
import stores from '../store_directory.json'
import './map.css'

class MapMex extends Component{

    constructor(props) {
        super(props);
        this.mapRef = React.createRef();//creamos referencia para hacer uso de ella mas abajo cuando determinamos el mapa
        
        this.state = {
            markers: [],
            favorites: []
          }
          // this.addFavorite = this.addFavorite.bind(this)
}
componentDidMount() {//buscamos el dato de la api y se jecuta despiues de que el elemento sea montado en el dom
    var myLatLng = {lat: 19.4978, lng: -99.1269};

    var map = new window.google.maps.Map(this.mapRef.current, {//se pone current que es atributo de una referencia para ques se vuelva accesible al nodo
     
      zoom: 10,
      center: myLatLng
    });
    console.log(map);
    

    stores.forEach(el => {
      let markerStore = new window.google.maps.Marker({//marker es una propiedad de maps
        position: el.Coordinates,
        map: map,
        title: el.Name
      });
      console.log(markerStore);
      
    });

    
  } 
  

  
render() {
  
      
  
  
    return (
      
      <div>
        <h1 className="title">Tus tiendas favoritas</h1>
        <div className="mapMex"  ref={this.mapRef} ></div>
         
      </div>
      
       
    )
    
  }
}
export default MapMex