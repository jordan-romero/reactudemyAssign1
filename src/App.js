import './App.css';
import UserOutput from './components/UserOutput'

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    users: [
      {username: 'Jordles'},
    ]
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}
