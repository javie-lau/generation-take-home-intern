import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import stores from '../store_directory.json'
import './map.css'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


class MapMex extends Component {

  constructor(props) {
    super(props);
    // this.mapRef = React.createRef();//creamos referencia para hacer uso de ella mas abajo cuando determinamos el mapa

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      favorites: [],
      markers: []
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.addFavorite = this.addFavorite.bind(this)

  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }


  addFavorite(stores) {
    console.log("probando");

  }




  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <div>
        <h1 className="title">Tus tiendas favoritas</h1>

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
                  onClick={this.onMarkerClick}
                  name={el.Name}
                  key={el.Address}
                  position={el.Coordinates}
                  place_={el}
                />

              )

            })
          }
          <InfoWindow
            className="window-info"
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          // onOpen={e => {
          //   this.onInfoWindowOpen(this.props)
          // }}
          >
            <div>

              <h1>{this.state.selectedPlace.name}</h1>

              <button className="btn"onClick={this.addFavorite.bind(this)}>agregar a  favoritos</button>
            </div>
          </InfoWindow>

        </Map>
      </div>

      // <div>
      //   <h1 className="title">Tus tiendas favoritas</h1>
      //   <div className="mapMex"  ref={this.mapRef} ></div>
      //   <markerStore onClick={this.addFavorite.bind(stores)}/>

      // </div>


    )

  }


}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(MapMex);