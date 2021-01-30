import './App.css';
import UserOutput from './components/UserOutput'
import UserInput  from './components/UserInput'

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    users: [
      {username: 'Jordles'},
    ]
  }
  
  usernameChangeHandler = (event) => {
    this.setState({
      users: [
        {username: event.target.value},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput onChange={this.usernameChangeHandler} username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}
