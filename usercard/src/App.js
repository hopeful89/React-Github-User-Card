import React, { Component } from 'react';

class App extends Component {
  state = {
    userSearch: 'hopeful89'
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.userSearch}`)
    .then(res => res.json())
    .then(user => this.setState(user))
    .catch( err => console.log(err))
  }
  render(){
    return (
      <>
        {console.log('bs: App.js : state CDM', this.state)}
      </>
    );
  }
}

export default App;
