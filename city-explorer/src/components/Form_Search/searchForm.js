import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location : ''
    };
  }

  inputVal = (e) => {
    e.preventDefault();
    this.setState({location: e.target.value});
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.searchHandler(this.state.location);
  }

  render() {
  return (
    <form class = {this.props.class}>
      <label>Search for a location</label>
      <input type="text" onChange={this.inputVal} id="input-search" placeholder="Enter a location here" />
      <button onClick={this.submitForm}>Explore!</button>
    </form>
  )
  }
}

export default SearchForm;