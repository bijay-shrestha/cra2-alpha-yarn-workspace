import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ url, title }) => (
  <a className="App-link" href={url} target="_blank" rel="noopener noreferrer">
    {title}
  </a>
);

Link.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
