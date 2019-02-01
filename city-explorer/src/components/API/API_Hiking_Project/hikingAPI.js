import React from 'react';

class HIKINGapi extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    console.log('Hiking Data', this.props.data)
    return (
      <section>
        <h3>Results from the Hiking Project API</h3>
        <ul className="trails-results">
        {this.props.data &&
          this.props.data.map((item, key) => {
            return (
              <li key={key}>
                <p>
                  Hike Name: <a href="{ item.trail_url }">{item.name}</a>,
                  Location: {item.location}, Distance: {item.length} miles
                </p>
                <p>
                  On {item.condition_date} at {item.condition_time}, trail
                  conditions were reported as: {item.conditions}
                </p>
                <p>
                  This trail has a rating of {item.stars} stars (out of{" "}
                  {item.star_votes} votes)
                </p>
                <p>{item.summary}</p>
              </li>
            );
          })}
      })}</ul>
      </section>
    )
  }

}

export default HIKINGapi;