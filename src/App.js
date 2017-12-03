import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id: '14132', name: 'Mike', rank: 'beginner'},
      {id: '52314', name: 'Becca', rank: 'expert'},
      {id: '25234', name: 'Robin', rank: 'intermediate'},
      {id: '26434', name: 'Kevin', rank: 'beginner'}
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
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
              rank={person.rank}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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
