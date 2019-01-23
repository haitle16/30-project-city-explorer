import React from 'react';

class URLform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'hide',
      url:''
    };
    this.display = this.display.bind(this);
    this.updateURL = this.updateURL.bind(this);
  }
  updateURL(e){
    e.preventDefault();
    console.log(e.target.value)
    this.setState({url:e.target.value})
  }
  display(e){
    e.preventDefault();
    this.state.display = 'hide';
    let displayHide = this.state.display;
    console.log(displayHide);
    this.setState({display: displayHide});
  }

  render() {
    return (
      <form id="url-form" onSubmit={this.display} class={this.state.display}>
        <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
        <input type="text" id="back-end-url" onChange={this.updateURL}></input>
      </form>
    );
  }
}

export default URLform;
