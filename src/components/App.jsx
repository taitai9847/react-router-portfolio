import React, { Component } from 'react';
import Menu from './Menu';

class App extends Component{
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <Menu />
      </div>
    )
  }
}

export default App