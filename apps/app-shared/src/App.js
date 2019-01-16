import React, { Component } from 'react';
import './App.css';
import {Header} from '@company/core';

class App extends Component {
  render() {
    const unused = true; // <- Here to test lint warning

    return (
      <div className="App">
        <Header title="CRA2 with Yarn Workspace & Monorepo" />
      </div>
    );
  }
}

export default App;
