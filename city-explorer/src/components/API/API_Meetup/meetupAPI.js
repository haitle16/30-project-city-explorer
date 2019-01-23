import React from 'react';

class MEETUPapi extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <section>
        <h3>Results from the Meetup API</h3>
        <ul className="meetups-results"></ul>
      </section>
    )
  }

}

export default MEETUPapi;