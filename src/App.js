import React, { Component } from 'react';
import {CardList} from './components/Cardlist';
import {Card} from './components/Card';
import './App.css';
import { SearchBox } from './components/SearchBox';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
  }

  render() {
    // destructor - pull the properties from object and make it as const here
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter( monster => monster.name.toLowerCase().includes( searchField.toLowerCase() ) )

      return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={ e => this.setState( { searchField: e.target.value } ) }
        />
          <CardList monsters = {filteredMonster} >
          </CardList>
      </div>
      );
  }


}

export default App;
