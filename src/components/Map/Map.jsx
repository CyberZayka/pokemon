import React, { Component } from "react";
import PropTypes from "prop-types"; 

import GoogleMapReact from "google-map-react"

const ReactComponent = ({ text }) => <div>{text}</div>;

class MyMap extends Component {
      static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height:"507px", width: "100vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  "AIzaSyBCo-Yq9_dCzK4FJVh0EIEuy2wxkkiz754"  }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <ReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Map"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

ReactComponent.propTypes = {
  text: PropTypes.string
}

MyMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number
}

export default MyMap