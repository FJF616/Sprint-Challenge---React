import React, { Component } from 'react';
import './App.css';
import Fetcher from './Fetcher'
import CharList from './CharList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
    };
  }
 /***
  * 
  * make Get request to the api then take the response data and setState with it
  */
  componentDidMount() {
    Fetcher.fetchPeople()
    .then(starwarsChars => this.setState({  starwarsChars }))
    .catch(error => { console.log("error", error) });
  }
 
 /**
  * 
  * 
  * pass props to Charlist component by using map function
  */
  render() {
    const { starwarsChars } = this.state;
    //console.log(starwarsChars) 
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h4>People / Robots</h4>
        {
          starwarsChars.map((starwarsChar) => {
            return <CharList starwarsChar={starwarsChar} key={starwarsChar.key} />
         })};
         
      </div>
    );
  }
}

export default App;


