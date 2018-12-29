import React from 'react';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
render() {
  switch(this.props.display) {
    case 'hide':
      return <div />
    case 'show':
    let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.locationData.latitude}%2c%20${this.props.locationData.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`;
      return (
        <React.Fragment>
          <img id="map" src={mapURL} alt="Map of search query" />
          {/* <h2 className="query-placeholder">Here are the results for {this.props.searchContent}</h2> */}
        </React.Fragment>
      );
    default: return <div>Map Error</div>
  }
}

}
export default Map;