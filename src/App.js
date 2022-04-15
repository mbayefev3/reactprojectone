import React, { Component } from 'react'
import Title from './components/Header'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Title />
      </div>
    )
  }
}

export default App