import React from 'react';

class DARKSKYapi extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    console.log('TESTING PROPS',this.props.fetchData('weather'));
    return (
      <section>
        <h3>Results from the Dark Sky API</h3>
        <ul>
      {/* {this.props.fetchData('weather').map((day) => {
        console.log(day.time, day.forcast);
        return (
          <li>
            The forcast for {day.time} is: {day.forcast}
          </li>
        );
      })} */}
    </ul>
      </section>
    );
  }

}

export default DARKSKYapi;