import React from 'react';
import YELPapi from './API_Yelp/yelpAPI.js';
import MOVIEapi from './API_Movie_DB/movieAPI.js';
import MEETUPapi from './API_Meetup/meetupAPI.js';
import HIKINGapi from './API_Hiking_Project/hikingAPI.js';
import DARKSKYapi from './API_DarkSky/darkskyAPI.js';
import superagent from 'superagent';

class APIHandler extends React.Component {
  constructor(props){
    super(props);
    this.state= {};
    this.getResource = this.getResource.bind(this);
  }


  getResource = async (resource) => {
    superagent.get(`https://city-explorer-backend.herokuapp.com/${resource}`)
    .query({data: this.props.locationData})
    .then(results =>{
      console.log('RESULTS',results.body);
      this.setState({[resource]: results.body})
    })
  }

  render() {
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
              <DARKSKYapi data={this.state.weather} fetchData={this.getResource}/>
              <YELPapi data={this.state.yelp}/>
              <MEETUPapi data={this.state.meetups}/>
              <MOVIEapi data={this.state.movies}/>
              <HIKINGapi data={this.state.hikings}/>
            </div>
          </React.Fragment>
        );
      default: return <div>Error displaying APIs</div>


    }
  }
}

export default APIHandler;