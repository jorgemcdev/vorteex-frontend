import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../shared/navbar/NavBar';

const Page = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <div className="container">
      {children}
    </div>
  </React.Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
