import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import stores from '../store_directory.json'
import './map.css'
import { Map, GoogleApiWrapper, Marker,  } from 'google-maps-react';


class MapMex extends Component {

  constructor(props) {
    super(props);
    // this.mapRef = React.createRef();//creamos referencia para hacer uso de ella mas abajo cuando determinamos el mapa

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      favorites: [],
      markers: [],
      place:[]
      
    }
    
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClick = this.onMapClick.bind(this);
    this.addFavorite = this.addFavorite.bind(this)

  }
  // onMarkerClick = (props, marker, e) => {
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });
  // }
  // onMapClick = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // }


  addFavorite(store) {
    console.log(store);    
    this.state.favorites.forEach(el => {
    
    if(el.Name === store){
      return
    
     }})
    
    
    
    this.setState({favorites:  this.state.favorites.concat([store]) })
    
   alert("tienda agregada exsitosamente")
    
    
    
  
    
   
    
    
    
    
    }

  




  render() {
    const mapStyles = {
      width: '80%',
      height: '90%',
    };
    

    return (
      <div>
        <div className="init">
         
        <h1 className="title">Tus tiendas favoritas</h1>
        </div>
        <div className="favorite">
                <h1>Tiendas Favoritas</h1>
                <div className="list">
                    <p>encuentra tis tiendas aqui</p>
                   {this.state.favorites.map(el=>{
                    console.log(el);
                     return(
                       <p key={el.name}>tienda{el.name}</p>
                     )
                   })}
                </div>
                <button type="button" class="btn btn-success">Eliminar</button>
            </div>
        
       <div>
         
        <Map
          style={mapStyles}
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 19.4978, lng: -99.1269 }}

          onClick={this.onMapClick} >
          {
            stores.map(el => {
              this.state.markers.push({
                position: el.Coordinates,
                address: el.Address,
                name: el.Name
              })
              return (
                <Marker
                  onClick={this.addFavorite}
                  name={el.Name}
                  key={el.Address}
                  position={el.Coordinates}
                  place_={el}
                />

              )

            })
          }
         

        </Map>
        </div>
        
       
        </div>
        
       

     


    )

  }


}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(MapMex);