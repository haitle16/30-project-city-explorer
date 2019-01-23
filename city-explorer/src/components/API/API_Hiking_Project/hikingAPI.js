import React from 'react';

class HIKINGapi extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <section>
        <h3>Results from the Hiking Project API</h3>
        <ul className="trails-results"></ul>
      </section>
    )
  }

}

export default HIKINGapi;