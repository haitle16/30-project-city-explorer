import React from 'react';

class YELPapi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <section className="yelp-container">
        <h3>Results from the Yelp API</h3>
        <ul className="yelp-results"></ul>
      </section>
    )
  }

}

export default YELPapi;