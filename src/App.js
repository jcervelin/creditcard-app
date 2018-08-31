import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AddCreditCard from './AddCreditCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
          <header className="App-header">
            <h1 className="App-title">Credit Card System</h1>
          </header>
          <h1 className="App-sub-title">Add</h1>
          <br/>
          <AddCreditCard />
      </Container>
    </div>

    );
  }
}

export default App;
