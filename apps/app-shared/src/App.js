import React, { Component } from 'react';
import './App.css';
import Header from '@company/core/src/components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="CRA2 with Yarn Workspace & Monorepo" />
      </div>
    );
  }
}

export default App;
