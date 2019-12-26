import React, { Component } from 'react';
import Menu from './components/Menu';

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