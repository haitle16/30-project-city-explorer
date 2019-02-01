import React from 'react';

class DARKSKYapi extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    // console.log('TESTING PROPS',this.props.fetchData);
    return (
      <section>
        <h3>Results from the Dark Sky API</h3>
        <ul>
      {this.props.data &&
        this.props.data.map((day) => {
        return (
          <li>
            The forcast for {day.time} is: {day.forecast}
          </li>
        );
      })}
    </ul>
      </section>
    );
  }

}

export default DARKSKYapi;