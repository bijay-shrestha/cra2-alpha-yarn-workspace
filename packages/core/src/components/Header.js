import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@company/shared';
import logo from './header/logo.svg';
import Hello from './Hello';

class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  state = {
    name: 'React Coder'
  };

  render() {
    const { title } = this.props;
    const { name } = this.state;
    const unused = true; // <- Here to test lint warning

    return (
      <header className="App-header">
        <p>{title}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is apps/app-shared</p>
        <Hello name={name} />
        <p>
          <Link url="https://reactjs.org" title="Learn React" />
        </p>
      </header>
    );
  }
}

export default Header;
