import React from 'react';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search/search';
import './App.css';

class App extends React.Component {
 constructor () {
    super();
    this.state = {
      monsters :[],
      searchValue:''
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()
    .then(users => this.setState({monsters:users})));
  }

  render () {

    const {monsters,searchValue} = this.state;
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchValue.toLowerCase()));
  
    return (
    <div className="App">
      <h1 className='headerApp'>Monsters Rolodex</h1>
       <SearchBox placeholder='search monsters' 
       handleChange={ e => this.setState({searchValue:e.target.value})} />
      <CardList monsters={filteredMonsters} />
     </div>
  );
  }
}

export default App;
