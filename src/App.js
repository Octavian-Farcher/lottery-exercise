import React, { Component } from 'react'
import Lottery from './Lottery'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Lottery title='Weekly Lottery (6 out of 49)' numBalls={6} maxNum={49} />
        <Lottery title='Daily Lottery (4 out of 20)' numBalls={4} maxNum={20} />
      </div>
    )
  }
}

export default App