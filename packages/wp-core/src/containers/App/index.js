import React, { Component } from 'react';
import './index.css';
import Hello from 'wp-core/dist/components/Hello';
import Header from 'wp-core/dist/components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="CRA & Yarn Workspaces" />
        <p className="App-intro">
          <Hello name="React Coder!" />
        </p>
      </div>
    );
  }
}

export default App;
