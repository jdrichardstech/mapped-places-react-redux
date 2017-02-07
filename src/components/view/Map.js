import React, { Component } from 'react'
import {GoogleMapLoader, GoogleMap, SearchBox } from 'react-google-maps'





class Map extends Component{

    constructor(){
        super()
        this.state={
            map:null
        }
    }

    mapDragged(){
        var latLng= this.state.map.getCenter().toJSON()
        console.log('mapDragged: ' + JSON.stringify(latLng))
        this.props.mapMoved(latLng)
    }


    render(){

        const mapContainer = <div style={{minHeight:400, height:'50%', width:'100%'}}></div>

          const INPUT_STYLE = {
            boxSizing: `border-box`,
            MozBoxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `1px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          };

        return(
            <GoogleMapLoader
            containerElement={mapContainer}
            googleMapElement = {
                <GoogleMap
                ref={(map)=>{
                        if(this.state.map!=null)
                        return
                        this.setState({map:map})

                    }
                }

                defaultZoom={this.props.zoom}
                defaultCenter = {this.props.center}
                onDragend={this.mapDragged.bind(this)}
                options={{streetViewControl:false, mapTypeControl: false}}
                >

                <SearchBox
                  ref={this.props.onSearchBoxMounted}
                  bounds={this.props.bounds}
                  controlPosition={google.maps.ControlPosition.TOP_LEFT}
                  onPlacesChanged={this.props.onPlacesChanged}
                  placeholder="Customized your placeholder"
                  inputStyle={INPUT_STYLE}
                />
              {/*      {this.props.markers.map((marker, index) => (
       <Marker position={marker.position} key={index} />*/}
     ))}
                </GoogleMap>
            }/>
        )
    }
}

export default Map
