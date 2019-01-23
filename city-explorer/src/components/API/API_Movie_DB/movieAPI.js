import React from 'react';

class MOVIEapi extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <section className="movie-container">
        <h3>Results from The Movie DB API</h3>
        <ul className="movies-results"></ul>
      </section>
    )
  }

}

export default MOVIEapi;