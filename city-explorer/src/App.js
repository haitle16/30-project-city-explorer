import React, { Component } from 'react';
import superagent from 'superagent';
import logo from './logo.svg';
import Header from './components/Header/header.js';
import URLform from './components/Form_BackendURL/urlForm.js';
import SearchForm from './components/Form_Search/searchForm.js';
import Map from './components/MapBox/cityMap.js';
import APIHandler from './components/API/apiHandler.js';
import './styles/styles.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      display:'hide'
    }
  }
  locationSearch = (content) => {
    superagent.get(`https://city-explorer-backend.herokuapp.com/location`)
    .query({data: content})
    .then(results => {
      console.log(results.body)
      console.log(content)
      this.setState({
        display: 'show',
        searchInput: content,
        locationData: results.body,
      });
    })
    .catch(err => {
      console.log(err);
    });
  }


  render() {
    return (
      <React.Fragment>
        <Header/>
        <URLform/>
        <SearchForm searchHandler={this.locationSearch}/>
        <Map display={this.state.display} searchInput={this.state.searchInput} locationData={this.state.locationData}/>
        <APIHandler display={this.state.display} locationData={this.state.locationData}/>
      </React.Fragment>
    );
  }
}

export default App;
