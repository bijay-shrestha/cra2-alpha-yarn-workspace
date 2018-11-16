import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from '@company/shared/components/Link';
import logo from './logo.svg';
import Hello from '../Hello/index';

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

    return (
      <header className="App-header">
        <p>{title}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name={name} />
        <p>
          <Link url="https://reactjs.org" title="Learn React" />
        </p>
      </header>
    );
  }
}

export default Header;
