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
    currentPerson: 0
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

  render() {
    return (
      <div className="App">
        <h1>React Complete Guide</h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person
          name={this.state.persons[this.state.currentPerson].name}
          rank={this.state.persons[this.state.currentPerson].rank}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
