import React from 'react';
import YELPapi from './API_Yelp/yelpAPI.js';
import MOVIEapi from './API_Movie_DB/movieAPI.js';
import MEETUPapi from './API_Meetup/meetupAPI.js';
import HIKINGapi from './API_Hiking_Project/hikingAPI.js';
import DARKSKYapi from './API_DarkSky/darkskyAPI.js';

class APIHandler extends React.Component {
  constructor(props){
    super(props);
    this.state= {};
  }

  render() {
    // console.log('STATE',this.receiveData());
    console.log('STATE',this.state);
    console.log('PROPS',this.props);
    switch(this.props.display) {
      case 'hide':
        return <div />
      case 'show':
        return (
          <React.Fragment>
            <section className="error-container"></section>
            <div className="column-container">
              <DARKSKYapi data={this.props.data[0]}/>
              <HIKINGapi data={this.props.data[1]}/>
              <MEETUPapi data={this.props.data[2]}/>
              <MOVIEapi data={this.props.data[3]}/>
              <YELPapi data={this.props.data[4]}/>
            </div>
          </React.Fragment>
        );
      default: return <div>Error displaying APIs</div>


    }
  }
}

export default APIHandler;