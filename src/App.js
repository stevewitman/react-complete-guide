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

  switchNameHandler = () => {
    let next;
    if (this.state.currentPerson === this.state.persons.length-1) {
      this.setState({currentPerson: 0});
    } else {
      next = this.state.currentPerson + 1
      this.setState({currentPerson: next})
    }
  }

  nameChangedHandler = (event) => {
    console.log("event.target.value: ", event.target.value)
    let updatedPersons = this.state.persons;
    console.log('updatedPersons: ', updatedPersons)
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
          <Person
          name={this.state.persons[this.state.currentPerson].name}
          rank={this.state.persons[this.state.currentPerson].rank}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler} />
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
