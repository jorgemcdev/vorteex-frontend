import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/shared/navbar/NavBar';

const Page = ({ children }) => (
  <div>
    <NavBar />
    <div className="container">
      {children}
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
