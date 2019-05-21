import React, { Component } from 'react';
import SWCharList from './components/SWCharList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page:1
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getCharactersNext = () =>{
    this.setState({page:this.state.page+1})
    this.getCharacters('https://swapi.co/api/people/?page='+this.state.page);

  }

  getCharactersPrevious = () =>{
    if(this.state.page <= 0){
      this.setState({page:1})
      this.getCharacters('https://swapi.co/api/people/?page='+this.state.page);
    } else{
      this.setState({page:this.state.page-1})
      this.getCharacters('https://swapi.co/api/people/?page='+this.state.page);
    }  
    
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <SWCharList swCharData ={this.state.starwarsChars} />
        <button onClick={this.getCharactersNext}>Next</button>
        {this.state.page === 1 ? null: <button onClick={this.getCharactersPrevious}>Previous</button>}
        
      </div>
    );
  }
}

export default App;
