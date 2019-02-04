import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/shared/navbar/NavBar';

const Default = ({ children }) => (
  <div>
    <NavBar />
    <div className="container">
      {children}
    </div>
  </div>

);

Default.propTypes = {
  children: PropTypes.node.isRequired
};

export default Default;
