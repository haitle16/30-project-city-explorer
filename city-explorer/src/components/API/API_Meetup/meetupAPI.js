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
        <ul className="meetups-results">
        {this.props.data &&
          this.props.data.map((item, key) => {
            return (
              <li key={key}>
                <a href="{ item.link }">{item.name}</a>
                <p>Hosted by: {item.host}</p>
                <p>Created on: {item.creation_date}</p>
              </li>
            );
          })}
          </ul>
      </section>
    )
  }

}

export default MEETUPapi;