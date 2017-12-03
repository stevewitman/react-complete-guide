import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: 'Mike', rank: 'beginner'},
      {name: 'Becca', rank: 'expert'},
      {name: 'Robin', rank: 'intermediate'},
      {name: 'Kevin', rank: 'beginner'}
    ],
    currentPerson: 0,
    showPersons: false
  }

  deletePersonHandler(personIndex) {
    // const persons = this.state.persons.slice(); //one way to get a new copy of an array
    const persons = [...this.state.persons] //modern way to get a new copy of an array
    persons.splice(personIndex, 1);
    this.setState({persons: persons}) 
  }

  nameChangedHandler = (event) => {
    let updatedPersons = this.state.persons;
    updatedPersons[this.state.currentPerson].name = event.target.value;
    this.setState({persons: updatedPersons});
  }

  togglePersonsHandler = () => {
    let toggle = !this.state.showPersons
    this.setState({showPersons: toggle})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              rank={person.rank}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>React Complete Guide</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
